window.Discotron.HelpController = class extends window.Discotron.Controller {
    /**
     * Ctor
     */
    constructor(args) {
        super("index.html", () => {
            this._displayHelp();
        });
    }

    /**
     * Displays help
     */
    _displayHelp() {
        // Query cards
        Discotron.Plugin.getAll().then((plugins) => {

            for (let pluginId in plugins) {
                const plugin = plugins[pluginId];

                let template = document.getElementById("template-plugin-help");
                let pluginCard = document.importNode(template.content, true);

                pluginCard.querySelector(".plugin-help-header").textContent = plugin.name;
                pluginCard.querySelector(".plugin-description").textContent = plugin.description;

                for (let i = 0; i < plugin.commands.length; i++) {
                    const command = plugin.commands[i];

                    let commandTemplate = document.getElementById("template-command");
                    let commandContainer = document.importNode(commandTemplate.content, true);

                    let displayedCommand = "";

                    switch (command.triggerType) {
                        case "command":
                            displayedCommand = "!" + command.trigger;
                            break;
                        case "words":
                            displayedCommand = "Words: " + command.trigger.join(", ");
                            break;
                        case "all":
                            displayedCommand = "(all)";
                            break;
                    }

                    commandContainer.querySelector(".command").textContent = displayedCommand;

                    for (let j = 0; j < command.args.length; j++) {
                        const arg = command.args[j];
                        if (arg.defaultValue !== undefined) {
                            commandContainer.querySelector(".command-args").textContent += "[" + arg.name + "]";
                        } else {
                            commandContainer.querySelector(".command-args").textContent += "<" + arg.name + ">";
                        }
                    }
                    
                    if(command.args.length === 0) {
                        commandContainer.querySelector(".command-args").textContent = "(no args)";
                    }

                    commandContainer.querySelector(".command-description").textContent = command.help;

                    pluginCard.querySelector(".plugin-commands").appendChild(commandContainer);
                }


                document.getElementById("plugin-list-container").appendChild(pluginCard);
            }
        });
    }

    /**
     * Display channel selector widget
     */
    _onAllowedChannelsClick() {
        //new Widgetmachin(channels, currentlyselectedChan, (lel) => {currentlyselectedChan = lel;} 
    }

    /**
     * Display userRole widget 
     */
    _onAdminsClick() {

    }

    /**
     * Callback to give to the channel selector widget
     */
    _onAllowedChannelsWidgetSave() {

    }

    /**
     * Callback to give to the user / role selector widget
     */
    _onAdminsWidgetSave() {

    }
};