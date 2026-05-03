$fallbackNode = "C:\Users\Rejede\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if (Get-Command node -ErrorAction SilentlyContinue) {
  node .\server.cjs
} elseif (Test-Path $fallbackNode) {
  & $fallbackNode .\server.cjs
} else {
  Write-Error "No se encontro un runtime de Node para iniciar el servidor local."
}
