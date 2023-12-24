// Importing necessary modules from the 'vscode' package
import * as vscode from 'vscode';

/**
 * This method is called when your extension is activated.
 * Your extension is activated the very first time the command is executed.
 * @param context - The context in which the extension is executed. This contains 
 *                  objects that are provided by VS Code and objects that you can 
 *                  use to register commands, etc.
 */
export function activate(context: vscode.ExtensionContext) {
    // Registering a command that will be invoked when the extension is activated.
    // 'extension.activate' is the command ID.
    let disposable = vscode.commands.registerCommand('extension.activate', () => {
        // Displaying an information message when the command is executed.
        vscode.window.showInformationMessage('Extension is activated!');
    });

    // Adding the command to the context's subscriptions. This will ensure proper 
    // disposal of the command when the extension is deactivated.
    context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated.
 */
export function deactivate() {
    // This function is currently empty. You can perform cleanup tasks here when 
    // your extension is deactivated. For example, disposing of any disposables, 
    // closing open connections, etc.
}
