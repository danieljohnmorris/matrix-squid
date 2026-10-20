import QtQuick
import Quickshell
import Quickshell.Io
import Quickshell.Wayland

// Starts the Matrix Squid screensaver at Omarchy's idle.screensaver deadline.
//
// Omarchy has no screensaver hook, so this arms one second before the built-in
// idle service. The squid windows use Omarchy's screensaver app id, which makes
// omarchy-launch-screensaver see a screensaver running and skip the terminal
// one; the built-in lock deadline and wake handling are unchanged.
Item {
  id: root

  property var shell: null
  property var manifest: null

  readonly property string home: Quickshell.env("HOME")
  readonly property string hostPath: decodeURIComponent(Qt.resolvedUrl("bin/matrix-squid-screensaver").toString().replace(/^file:\/\//, ""))
  readonly property int defaultScreensaverSeconds: 150
  property int screensaverSeconds: defaultScreensaverSeconds

  function readIdleConfig() {
    var seconds = root.defaultScreensaverSeconds
    try {
      const idle = JSON.parse(shellConfig.text() || "{}").idle || {}
      if (idle.screensaver !== undefined && isFinite(Number(idle.screensaver)))
        seconds = Math.max(0, Math.floor(Number(idle.screensaver)))
    } catch (error) {
      console.warn("matrix-squid: unreadable shell.json, using " + seconds + "s: " + error)
    }
    root.screensaverSeconds = seconds
  }

  // Omarchy's own skip conditions: stay awake, `omarchy toggle screensaver`, locked.
  function launch(force) {
    if (screensaverProcess.running) return "running"
    var guard = force ? "" :
      "[[ -f \"$HOME/.local/state/omarchy/indicators/stay-awake\" ]] && exit 0; " +
      "omarchy-toggle-enabled screensaver-off && exit 0; " +
      "[[ $(omarchy-shell lock isLocked 2>/dev/null) == true ]] && exit 0; "
    screensaverProcess.command = ["bash", "-c", guard + "exec \"$0\" --app-id org.omarchy.screensaver", root.hostPath]
    screensaverProcess.running = true
    return "started"
  }

  FileView {
    id: shellConfig
    path: root.home + "/.config/omarchy/shell.json"
    watchChanges: true
    printErrors: false
    onLoaded: root.readIdleConfig()
    onLoadFailed: root.readIdleConfig()
    onFileChanged: reload()
  }

  IdleMonitor {
    enabled: root.screensaverSeconds > 0
    timeout: Math.max(1, root.screensaverSeconds - 1)
    respectInhibitors: true
    onIsIdleChanged: if (isIdle) root.launch(false)
  }

  Process {
    id: screensaverProcess
    stderr: SplitParser {
      onRead: line => console.log("matrix-squid: " + line)
    }
  }

  // `omarchy-shell matrix-squid launch` starts it now, like System > Screensaver.
  IpcHandler {
    target: "matrix-squid"
    function launch(): string { return root.launch(true) }
  }
}
