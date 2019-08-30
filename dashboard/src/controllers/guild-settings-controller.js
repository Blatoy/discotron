window.Discotron.GuildSettingsController = class extends window.Discotron.Controller {
    /**
     * Ctor
     * @param {object} args Args given by the user in the URL
     */
    constructor(args) {
        super("admin/guild-settings.html", () => {
            this._guild = args.guild;
            
            document.querySelector("h1").textContent = "Server settings - " + this._guild;
        });
    }

    /**
     * Displays the form entry concerning the plugin prefix
     */
    _displayPrefix() {

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