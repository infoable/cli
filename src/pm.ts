interface PMInterface {
  npm?: string;
  yarn?: string;
}
enum PM {
  yarn = "yarn",
  npm = "npm"
}

let pm: PM | null = null;
export function pmCommand(cmd: PMInterface): string {
  if (pm === PM.npm && cmd.npm) {
    return cmd.npm;
  } else if (pm === PM.yarn && cmd.yarn) return cmd.yarn;
  return "";
}
export function setPM(type: string) {
  if (type === "npm") pm = PM.npm;
  else if (type === "yarn") pm = PM.yarn;
}
