var _ = require('underscore'),
    defaultCoreFilterPriority = 4,
    coreFilters;

coreFilters = function (ghost) {
    ghost.registerFilter('ghostNavItems', defaultCoreFilterPriority, function (args) {
        var selectedItem;

        // Set the nav items based on the config
        args.navItems = ghost.config().nav;

        // Mark the current selected Item
        selectedItem = _.find(args.navItems, function (item) {
            // TODO: Better selection determination?
            return item.url === args.path;
        });

        if (selectedItem) {
            selectedItem.active = true;
        }

        return args;
    });
};

module.exports.loadCoreFilters = coreFilters;