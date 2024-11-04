# Apps in "Production"

- your index.html should be served with a `no-cache` header. 

- all the other files should have long expiration dates (standard is one year).


# Your job is primarily making the UI work properly.

The UI should accurately reflect the application state.

It should provide affordances through which:
    - We make it easy for the users to do what we want them to do.
    - It makes it impossible to put our application in a bad state or mode.

The *last* thing you should worry about is "side effects"
    - Saving data to an API or getting data from an API is a "side effect".


State is "data", but also "present", or some aspect of time.

- Kinds of state
    - About the particular user and their use of our application (prefs)
    - Server State that is about the particular user.
        - We don't own this. It is a reference to "stale" data owned by another server.
            - we made create affordances that allow the user to suggest other versions of this state, but we can't modify it ourselves.

    - Server State that is shared across users (Shared Stores).
        - Usually just reference stuff.
