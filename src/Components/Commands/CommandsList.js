import "./CommandsList.css"
import CommandCategory from "./CommandCategory";
import arrow from "../../Assets/Images/arrow.svg"
const commands = [
    {
        "title": "Bot Commands",
        "description": "Commands relating to the bot.",
        "commands": [
            {
                "title": "help",
                "description": "Returns the Help menu for the bot."
            },
            {
                "title": "ping",
                "description": "Returns the Bots ping."
            },
            {
                "title": "stats",
                "description": "Returns the stats of the bot."
            }
        ]
    },
    {
        "title": "Info Commands",
        "description": "Commands that return info about things in a server.",
        "commands": [
            {
                "title": "serverinfo",
                "description": "Returns information about this server."
            },
            {
                "title": "userinfo",
                "description": "Returns information about a user.",
                "options": [
                    {"name": "user", "description": "The user to get information about.", "required": false}
                ]
            },
            {
                "title": "roleinfo",
                "description": "Returns information about a role.",
                "options": [
                    {"name": "role", "description": "The role to get information about.", "required": true}
                ]
            },
            {
                "title": "rolelist",
                "description": "Returns a list of all the roles in this server."
            },
            {
                "title": "channelinfo",
                "description": "Returns information about a channel.",
                "options": [
                    {"name": "channel", "description": "The channel to get information about.", "required": true}
                ]
            },
            {
                "title": "graph",
                "description": "Returns a line chart representing the activity of a channel over the past 7 days.",
                "options": [
                    {"name": "channel", "description": "The channel to generate the graph for.", "required": false}
                ]
            }
        ]
    },
    {
        "title": "Welcome Setup Commands",
        "description": "Commands for setting up welcome and leave messages on a server.",
        "commands": [
            {
                "title": "setup-welcome",
                "description": "Set up welcome and leave messages on this server.",
                "options": [
                    {"name": "welcome-channel", "description": "The channel for welcome messages.", "required": true},
                    {"name": "leave-channel", "description": "The channel for leave messages.", "required": true}
                ],
                "permissions": ["Manage Server"]
            },
            {
                "title": "update-welcome",
                "description": "Update the settings for welcome and leave messages.",
                "permissions": ["Manage Server"]
            },
            {
                "title": "disable-welcome",
                "description": "Disable welcome and leave messages.",
                "permissions": ["Manage Server"]
            }
        ]
    },
    {
        "title": "Autorole Setup Commands",
        "description": "Commands for setting up autorole on a server.",
        "commands": [
            {
                "title": "setup-autorole",
                "description": "Set up autorole on this server.",
                "permissions": ["Manage Server"]
            },
            {
                "title": "update-autorole",
                "description": "Update the settings for autorole.",
                "permissions": ["Manage Server"]
            },
            {
                "title": "disable-autorole",
                "description": "Disable autorole.",
                "permissions": ["Manage Server"]
            }
        ]
    },
    {
        "title": "Rank Commands",
        "description": "Commands for retrieving user ranks and leaderboard data.",
        "commands": [
            {
                "title": "rank",
                "description": "Returns a user's rank.",
                "options": [
                    {"name": "target", "description": "The user to get the rank for.", "required": false}
                ]
            },
            {
                "title": "leaderboard",
                "description": "Returns the leaderboard data of this server."
            }
        ]
    },
    {
        "title": "Rank Manager Commands",
        "description": "Commands for managing the rank module on a server.",
        "commands": [
            {
                "title": "setup-rank",
                "description": "Set up the rank module on this server.",
                "permissions": ["Manage Server"]
            },
            {
                "title": "disable-rank",
                "description": "Disable the rank module on this server.",
                "permissions": ["Manage Server"]
            },
            {
                "title": "set-level",
                "description": "Set the level for a user on this server.",
                "options": [
                    {"name": "target", "description": "The user to set the level for.", "required": true},
                    {"name": "level", "description": "The level to set.", "required": true}
                ],
                "permissions": ["Manage Server"]
            },
            {
                "title": "set-xp",
                "description": "Set the xp for a user on this server.",
                "options": [
                    {"name": "target", "description": "The user to set the xp for.", "required": true},
                    {"name": "xp", "description": "The xp to set.", "required": true}
                ],
                "permissions": ["Manage Server"]
            }
        ]
    },
    {
        "title": "Silly Commands",
        "description": "Commands for getting a lil freaky 👅.",
        "commands": [
            {
                "title": "hug",
                "description": "Hug a user (with cute cat gifs :3).",
                "options": [
                    {"name": "target", "description": "The user to hug.", "required": true}
                ]
            },
            {
                "title": "slap",
                "description": "Slap a user (with CERTAINLY NOT cute cat gifs :3).",
                "options": [
                    {"name": "target", "description": "The user to slap.", "required": true}
                ]
            },
            {
                "title": "meme",
                "description": "Get a random meme from reddit."
            },
            {
                "title": "copypasta",
                "description": "Get a random copypasta from reddit."
            },
            {
                "title": "mock",
                "description": "mOcK a given string. (Also available as context menus)",
                "options": [
                    {"name": "text", "description": "The text to mock.", "required": true}
                ]
            }
        ]
    },
    {
    "title": "Utility Commands",
    "description": "Commands for various utilities like weather, AQI, conversions, and more.",
    "commands": [
        {
            "title": "weather",
            "description": "Get the current and forecast weather data for a location.",
            "options": [
                {"name": "location", "description": "The location to get weather data for.", "required": true}
            ]
        },
        {
            "title": "aqi",
            "description": "Get the current AQI data for a location.",
            "options": [
                {"name": "location", "description": "The location to get AQI data for.", "required": true}
            ]
        },
        {
            "title": "unit-convert",
            "description": "Convert a quantity from one unit to another.",
            "options": [
                {"name": "quantity", "description": "The quantity to convert.", "required": true}
            ]
        },
        {
            "title": "currency-convert",
            "description": "Convert money from one currency to another.",
            "options": [
                {"name": "input_currency", "description": "The currency to convert from.", "required": true},
                {"name": "output_currency", "description": "The currency to convert to.", "required": true},
                {"name": "value", "description": "The amount to convert.", "required": true}
            ]
        },
        {
            "title": "calculator",
            "description": "Use a button calculator inside discord."
        },
        {
            "title": "webss",
            "description": "Take a screenshot of a given website.",
            "options": [
                {"name": "url", "description": "The URL of the website to screenshot.", "required": true},
                {"name": "wait", "description": "Time to wait before taking the screenshot.", "required": false}
            ]
        }
    ]
}


]
function CommandsList(args) {
    return (
        <div className="CommandCategory">
            <div className="header">
                <p className="heading">Commands</p>
                <p className="sub">All the Bot commands.</p>
                <div className="top-gradient-cont">
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
            </div>
            <div className="commands-list">
                <div className="expand-info">
                    <span>Click the arrow next to a command to know more about it.</span>
                </div>
                {commands.map((command, index) => (
                    <CommandCategory command={command} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default CommandsList