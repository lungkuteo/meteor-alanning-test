Profiles = new Mongo.Collection("profiles");
Profiles.allow({
    insert: function () {
        // the user must be logged in, and the document must be owned by the user
        return true;
    },
    update: function () {
        // can only change your own documents
        return true;
    },
    remove: function () {
        // can only remove your own documents
        return true;
    }
});