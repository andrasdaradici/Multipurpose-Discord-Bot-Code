const { Bot } = require("dbd.js")
const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "Put your token here.", 
prefix: "$getServerVar[prefix]" 
})

//#region  [Status lmao]
bot.status({
    text: "my community",
    type: "WATCHING",
    time: 10
})

bot.status({
    text: "with $allMembersCount users",
    type: "PLAYING",
    time: 10
})

bot.status({
    text: "in $serverCount servers",
    type: "PLAYING",
    time: 10
})



bot.status({
    text: "|help",
    time: 10
})

bot.status({
    text: "with my ping : $ping",
    time: 10
})

bot.status({
    text: "to your music",
    type: "LISTENING",
    time: 10
})

bot.status({
    text: "with my creator | Andreww#5890",
    type: "PLAYING",
    time: 10
})
//#endregion

bot.command({
    name:"invite",
    code: `
    $title[Invite]
    $description[
        You can invite me [here](https://discord.com/oauth2/authorize?client_id=854712497415782411&scope=bot&permissions=8564768767)!
    ]
    $color[fafafa]
    $footer[Made by Andreww#5890]
    $thumbnail[$userAvatar[854712497415782411]]`
})

//#region [Tickets]
bot.command({
    name: "new",
    code: `Ticket Created!
    $newTicket[ticket-$random[100;10000];Hello, Please mention a staff member!;814412891045232651;no;Error!]
    `
})

bot.command({
    name: "close",
    code: `$closeTicket[This is not a ticket!]`
})

bot.command({
    name: "claim",
    code: `
    $title[Claim]
    $description[This ticket was claimed by <@$authorID> who is a <@&$highestRole[$authorID]>]`
})
//#endregion
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))


for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`) 
    bot.command(command)
    }
}

bot.command({
    name: "ban",
    code: `
    $username[$mentioned[1]] has been banned from the guild.
    $ban[$mentioned[1]]
    $argsCheck[1;Just enter the User ID of who you want to ban.]
    $onlyPerms[ban;Only cool people with ban perms can use this!]
    `
});

bot.command({
    name: "kick", 
    code: `$kick[$mentioned[1]]
    $onlyPerms[kick;Only cool people with kick perms can use this!]`
    //Kicks the mentioned user
    })

bot.readyCommand({
    channel: "854780207894102026",
    code: `
    $title[<:blurple_settings:854006314540072991> | Restart]
    $description[I unfortunately was offline for some time.
    Whilst I was offline I have recieved some patches/updates!
    Enjoy the new features/patches!]
    $color[facfdf]
    $footer[Made by Andreww#5890]
    $thumbnail[$userAvatar[854712497415782411]]
    `
}) //bot.onReady() is not needed

//#region [Music]
bot.command({
    name: "volume",
    aliases: ["vol"],
    code: `
    $volume[$message]
    `
})

bot.command({
    name: "play",
    code: `$playSong[$message;yes;no;:x: Could not play song!]`
    })
bot.command({
    name: "p",
    code: `$playSong[$message;yes;no;:x: Could not play song!]`
})

bot.command({
    name: "queue",
    code: `$title[Queue]
    $Description[Currrently Playing: $songInfo[title]
        $queue[1;10;{number} - {title} | <@{userID}>]]
    $color[RANDOM]`
}) 

bot.command({
    name: "q",
    code: `$title[Queue]
    $Description[Currrently Playing: $songInfo[title]
        $queue[1;10;{number} - {title} | <@{userID}>]]
    $color[RANDOM]`
}) 


bot.command({
    name:"skip",
    code:`$skipSong`
    })

bot.command({
    name:"s",
    code:`$skipSong`
})

bot.command({
    name: "loopQueue",
    code: `Looped the queue! $loopQueue`
})

bot.command({
    name: "lq",
    code: `Looped the queue! $loopQueue`
})

bot.command({
    name: "loopSong",
    code: `
    Looping current song.
    $loopSong
    `
})

bot.command({
    name: "Spotify",
    code: `$playSpotify[$message;name;yes;:x: An error has occured]
    `
})

bot.command({
    name: "ps",
    code: `$playSpotify[$message;name;yes;:x: An error has occured]
    `
})

bot.command({
    name: "ls",
    code: `
    Looping current song.
    $loopSong
    `
})

bot.command({
    name:"pause",
    code:`$pauseSong`
    })

bot.command({
    name:"resume",
    code: `$resumeSong`
})

bot.command({
    name: "songInfo",
    code: `
    $title[Currrently Playing: $songInfo[title] - $songInfo[publisher]]
    $description[$songInfo[description]]
    $image[$songInfo[thumbnail]]
    $color[RANDOM]
    `
})

bot.command({
    name: "si",
    code: `
    $title[Currrently Playing: $songInfo[title] - $songInfo[publisher]]
    $description[You can listen to it on youtube here:
    - $songInfo[url]
    Duration: $songInfo[duration]
    Duration left: $songInfo[duration_left]]
    $image[$songInfo[thumbnail]]
    $color[RANDOM]
    `
})

//#endregion

//#region [Levelling]
bot.command({
    name: "setrank",
    usage: "setrank <channel>",
    description: "settings the levelup channel",
    code: `
    $title[<:blurple_tc:854006158414577665> | Rank-up log channel]
    $description[Success!  Rank-up log channel has been set to <#$mentionedChannels[1;yes]>]
    $color[$userRoleColor[$authorID]]
   $setServerVar[rch;$mentionedChannels[1;yes]]
   $setServerVar[rsystem;1]
   $onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
   $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
   $cooldown[5s;Please wait **%time%**]`
   })
    
   bot.command({
    name: "resetrank",
    usage: "resetrank",
    description: "reset the levelup channel",
    code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
    $color[$userRoleColor[$authorID]]
   $setServerVar[rch;]
   $setServerVar[rmsg;$getVar[rmsg]]
   $setServerVar[rsystem;0]
   $onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
   $onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
   $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
   $cooldown[5s;Please wait **%time%**]`
   })
    
   bot.command({
    name: "$alwaysExecute",
    code: `$useChannel[$getServerVar[rch]]
   $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
   $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
   $setUserVar[rexp;$multi[$getUserVar[rexp];2]]
   $onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
   $onlyForServers[$guildID;]` 
   })
    
   bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
   $onlyIf[$getServerVar[rsystem]>=1;]
   $onlyForServers[$guildID;]`
   })
    
   bot.awaitedCommand({
    name: "errorrank",
    code: `$setServerVar[rch;]
   $onlyForServers[$guildID;]`
   })
    
   bot.command({
    name: "setrankmsg",
    usage: "setrankmsg <message>",
    description: "message for the leveled up",
    code: `
    $title[<:blurple_rules:854005732142481469> | Rank-up message]
    $description[Success! Your level up message has been successfully set to:
   \`$message\`]
   $color[$userRoleColor[$authorID]]
   $setServerVar[rmsg;$message]
   $onlyIf[$message!=;You can also use this variables:
   \`\`\`
   {user.tag} = $userTag
   {user.mention} = <@$authorID>
   {level} = 1
   {exp} = 25
   \`\`\`
   Current msg is:
   \`$getServerVar[rmsg]\`]
   $onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
   $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
   $cooldown[5s;Please wait **%time%**]`
   })
    
   bot.command({
    name: "rank",
    aliases: ["level"],
    usage: "rank (user)",
    description: "see the current level and exp",
    code: `$color[$userRoleColor[$authorID]]
    $image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=$getGlobalUserVar[rankBg]&xpcolor=ff0000&isboosting=$isBoosting[$authorID]]
   $onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
   $cooldown[5s;]`
   })
//#endregion

//#region  currency

   bot.command({
    name: "balance",
    aliases: ["bal"],
    code: `
    $title[User Balance]
    $description[$username[$mentioned[1]] has **$getGlobalUserVar[money;$mentioned[1]]$getServerVar[currency]** in their wallet
    $color[$userRoleColor[$authorID]]
    $onlyIf[$mentioned[1]!=;You must ping someone in order for this command to work!]
    $footer[Made by Andreww#5890]`
   })

   bot.command({
    name: "work",
    code:`
    $title[Work]
    $description[You worked as **$randomText[butcher;police officer; doctor; teacher; Twitch streamer; actor; dancer; engineer; hunter; YouTuber; game developer; discord mod; archeologist; secretary; maid]**
    and got payed $random[100;2000]$getServerVar[currency]
    $setGlobalUserVar[money;$math[$getGlobalUserVar[money]+$random[100;2000]]]
    $color[$userRoleColor[$authorID]]
    $complexCooldown[user;1m;Don't be greedy $username[$authorID]. Wait %time% untill you can work again!]
    $footer[Made by Andreww#5890]`
   })

   bot.command({
     name:"shop",
     code: `
     $dm[$authorID]
     $title[Shop]
     $description[
    **Duckie | 🦆**
    *Collectable*
    ID: *duckie*
    **Price**: 1000$getServerVar[currency]
    **Description**:
    \`\`\`A duckie which you can collect. Has no literal use, just purely cosmetical.\`\`\`
    **Pistol | 🔫**
    *Utility*
    ID: *pistol*
    **Price**: 1500$getServerVar[currency]
    **Description**:
    \`\`\`A pistol which you can use to rob someones money.\`\`\`
    **Coin | :coin:**
    *Utility*
    ID: *coin*
    **Price**: 4500$getServerVar[currency]
    **Description**:
    \`\`\`Exchange this coin to get a random ammount of money. Try your luck!\`\`\`
    **Andreww's Keyboard | ⌨️**
    *Collectable*
    ID: *keyboard*
    **Price**: 20000$getServerVar[currency]
    **Description**:
    \`\`\`Flex your money by buying this.\`\`\`
     ]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]`
   })

   bot.command({
       name:"shop-cards",
       code:`
    $dm[$authorID]

       $title[Rank cards]
       $description[
           [**Beehive Pattern Card**](https://i.imgur.com/LB6kAXo.png)
           ID: *beehive*
           **Price**: 2000$getServerVar[currency]
           [**Red Waves Pattern Card**](https://i.imgur.com/Q2adPlk.png)
           ID: *waves*
           **Price**: 4000$getServerVar[currency]
           [**Scenery 1**](https://i.imgur.com/KnB8tGj.png)
           ID: *scen1*
           **Price**: 8000$getServerVar[currency]
           [**Scenery 2**](https://i.imgur.com/Mcz3lFp.png)
           ID: *scen2*
           **Price**: 8500$getServerVar[currency]
           [**Scenery 3**](https://i.imgur.com/4ByuCb3.png)
           ID: *scen3*
           **Price**: 10000$getServerVar[currency]
           [**Scenery 4**](https://i.imgur.com/Dp7riHT.png)
           ID: *scen4*
           **Price**: 12000$getServerVar[currency]
           [**Scenery 5**](https://i.imgur.com/wZYCtRU.png)
           ID: *scen5*
           **Price**: 14000$getServerVar[currency]
           [**Scenery 6**](https://i.imgur.com/L8lXais.png)
           ID: *scen6*
           **Price**: 16000$getServerVar[currency]
           [**Scenery 7**](https://i.imgur.com/qC3RDuc.png)
           ID: *scen7*
           **Price**: 18000$getServerVar[currency]
           [**Scenery 8**](https://i.imgur.com/MPvibrV.png)
           ID: *scen8*
           **Price**: 20000$getServerVar[currency]
           Note: *By buying these rank cards they instantly get applied to you, you do not need to change anything. If you'd like to change to a different card then you need to buy it and it will automatically apply.*
       ]
       $color[$userRoleColor[$authorID]]
       $footer[Made by Andreww#5890]
    `
   })

   bot.command({
    name:"inventory",
    aliases: ["inv"],
    code: `
    $title[Inventory of $username[$mentioned[1]]]
    $description[
    **__$username[$mentioned[1]]__** currently has:
    🦆 $getGlobalUserVar[duckCount] - Duckies
    🔫 $getGlobalUserVar[pistolCount] - Pistols
    :coin: $getGlobalUserVar[coinCount] - Lucky Coins
    ⌨️ $getGlobalUserVar[keyboardCount] - Keyboards
    ]
    $onlyIf[$mentioned[1]!=;You must ping someone in order for this command to work!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
   })

   bot.command({
    name:"buy",
    code: `
    $if[$message==duckie]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];500];$authorID]
    $setGlobalUserVar[duckCount;$sum[$getGlobalUserVar[duckCount;$authorID];1];$authorID]
    You bought a duckie for 500$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=500;You do not have enough money for this!]
    $elseIf[$message==pistol]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];1000];$authorID]
    $setGlobalUserVar[pistolCount;$sum[$getGlobalUserVar[pistolCount;$authorID];1];$authorID]
    You bought a pistol for 1000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=1000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==coin]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];5000];$authorID]
    $setGlobalUserVar[coinCount;$sum[$getGlobalUserVar[coinCount;$authorID];1];$authorID]
    You bought a lucky coin for 5000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=5000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==keyboard]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];10000];$authorID]
    $setGlobalUserVar[keyboardCount;$sum[$getGlobalUserVar[keyboardCount;$authorID];1];$authorID]
    You bought Andreww's keyboard for 69420$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=69420;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==beehive]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];2000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/LB6kAXo.png;$authorID]
    Succesfully set new rank card background for 2000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=2000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==waves]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];4000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/Q2adPlk.png;$authorID]
    Succesfully set new rank card background for 4000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=4000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen1]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];8000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/KnB8tGj.png;$authorID]
    Succesfully set new rank card background for 8000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=8000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen2]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];8500];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/Mcz3lFp.png;$authorID]
    Succesfully set new rank card background for 8500$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=8500;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen3]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];10000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/4ByuCb3.png;$authorID]
    Succesfully set new rank card background for 10000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=10000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen4]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];12000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/Dp7riHT.png;$authorID]
    Succesfully set new rank card background for 12000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=12000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen5]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];14000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/wZYCtRU.png;$authorID]
    Succesfully set new rank card background for 14000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=14000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen6]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];16000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/L8lXais.png;$authorID]
    Succesfully set new rank card background for 16000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=16000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen7]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];18000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/qC3RDuc.png$authorID]
    Succesfully set new rank card background for 18000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=18000;You do not have enough money for this!]
    $endelseif
    $elseIf[$message==scen8]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];20000];$authorID]
    $setGlobalUserVar[rankBg;https://i.imgur.com/MPvibrV.png;$authorID]
    Succesfully set new rank card background for 20000$getServerVar[currency]!
    $onlyIf[$getGlobalUserVar[money;$authorID]>=20000;You do not have enough money for this!]
    $endelseif
    $endif

    $onlyIf[$message!=;You must mention the item you're buying!]
    `
   })

bot.command({
    name:"use",    
    code:`
    $if[$message==coin]
    $setGlobalUserVar[money;$math[$getGlobalUserVar[money;$authorID]+$random[2500;10000]]]
    $setGlobalUserVar[coinCount;$sub[$getGlobalUserVar[coinCount;$authorID];1]]
    You used a lucky coin and got $random[2500;10000]$getServerVar[currency]
    $onlyIf[$getGlobalUserVar[coinCount;$authorID]>=1;You must have a coin to do this command!]
    $endif
    $argsCheck[>1;You must mention what item you're using!]`
})

bot.command({
    name:"give-money",
    code:`
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];$message[1]];$mentioned[1]]
    Succesfully given <@$mentioned[1]> $message[1]$getServerVar[currency]!
    $onlyIf[$authorID==716587781094113300]
    `
})

bot.command({
    name:"set-money",
    code:`
    $setGlobalUserVar[money;;$message[1]];$mentioned[1]]
    Succesfully set <@$mentioned[1]>'s balance to $message[1]$getServerVar[currency]!
    $onlyIf[$authorID==716587781094113300]
    `
})

bot.command({
    name:"rob",
    aliases:["steal"],
    code:`
    $title[Rob]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[0;$getGlobalUserVar[money;$mentioned[1]]]];$authorID]
    $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$mentioned[1]];$random[0;$getGlobalUserVar[money;$mentioned[1]]]];$mentioned[1]]
    $setGlobalUserVar[pistolCount;$sub[$getGlobalUserVar[pistolCount;$authorID];1]]
    $description[You have stolen $random[0;$getGlobalUserVar[money;$mentioned[1]]]$getServerVar[currency] from <@$mentioned[1]>]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    $onlyIf[$mentioned[1]!=;You must ping someone in order for this command to work!]`
})

bot.command({
    name:"set-currency",
    aliases:["currency"],
    code:`
    $setServerVar[currency;$message]
    $title[Succesful!]
    $description[Succesfully set currency to \`$message\`]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})
//#endregion

//#region  logging

bot.deletedCommand({
    channel: "$getServerVar[logid]",
    code: `
    $title[<:template_no:854695187539427369> | Message deleted]
    $description[
    User: <@$authorID>
    Channel: <#$channelUsed>
    Content: $message]
    $color[RANDOM]
    $onlyIf[$getServerVar[logid]!=0]
    `
})
bot.onMessageDelete()

bot.updateCommand({
    channel: "$getServerVar[logid]", 
    code: `
    $title[✏️ | Message edited]
    $description[
    User: <@$authorID>
    Channel: <#$channelUsed>
    Old message: $oldMessage
    New message: $message]
    $color[RANDOM]
    $onlyIf[$getServerVar[logid]!=0]`
})
bot.onMessageUpdate() 

bot.channelCreateCommand({ 
    channel: "$getServerVar[logid]", 
    code: `
    $title[<:text_channel:854694808608964648> | Channel Created]
    $description[
    <#$newChannel[id]>]
    $color[RANDOM]
    $onlyIf[$getServerVar[logid]!=0]
    `
    })
bot.onChannelCreate() 

bot.channelUpdateCommand({ 
    channel: "$getServerVar[logid]", 
    code: `
    $title[<:edit_channel:854694934291283978> | Channel Updated]
    $description[
    Channel edited: <#$newChannel[id]>
    Name: $newChannel[name]
    Topic: $newChannel[topic]
    Is NSFW: $newChannel[nsfw]]
    $color[RANDOM]
    $onlyIf[$getServerVar[logid]!=0]`
})

bot.onChannelUpdate()

bot.channelDeleteCommand({ 
    channel: "$getServerVar[logid]", 
    code: `
    $title[<:text_channel:854694808608964648> | Channel Deleted]
    $description[
    $oldChannel[name]]
    $color[RANDOM]
    $onlyIf[$getServerVar[logid]!=0]
    `
    })

bot.onChannelDelete()

//#endregion

//#region [Embed builder]

bot.command({
    name:"showEmbed",
    aliases:["se"],
    code:`
    $title[$getServerVar[title]]
    $description[$getServerVar[description]]
    $thumbnail[$getServerVar[thumbnail]]
    $image[$getServerVar[image]]
    $color[$getServerVar[color]]
    $footer[$getServerVar[footer]]
    `
})

bot.command({
    name:"embedHelp",
    aliases:["eh"],
    code:`
    $title[Embed creation help]
    $description[
    Do **$getServerVar[prefix]title {title}** to set the title of the embed.
    Do **$getServerVar[prefix]description {description}** to set the description of the embed. 
    (If you'd like to open a new line in the embed do Shift+Enter to open new line in discord.)
    Do **$getServerVar[prefix]color {color}** to set the color of the embed. 
    (Uses HEX colors.)
    Do **$getServerVar[prefix]image {image}** to set the image of the embed. 
    (You may leave this empty if you don't want image.)
    Do **$getServerVar[prefix]thumbnail {thumbnail}** to set the thumbnail of the embed. 
    (You may leave this empty if you don't want thumbnail.)]
    $color[$getServerVar[color]]
    `
})

bot.command({
    name:"title",
    code:`
    $setServerVar[title;$message]
    $title[Succesful!]
    $description[Succesfully set embed title.]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})

bot.command({
    name:"description",
    code:`
    $setServerVar[description;$message]
    $title[Succesful!]
    $description[Succesfully set embed description.]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})

bot.command({
    name:"color",
    code:`
    $setServerVar[color;$message]
    $title[Succesful!]
    $description[Succesfully set embed color]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})

bot.command({
    name:"image",
    code:`
    $setServerVar[image;$message]
    $title[Succesful!]
    $description[Succesfully set embed image.]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})

bot.command({
    name:"thumbnail",
    code:`
    $setServerVar[thumbnail;$message]
    $title[Succesful!]
    $description[Succesfully set embed thumbnail.]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})
//#region 

bot.command({
    name:"prefix",
    code:`
    $setServerVar[prefix;$message]
    $title[Succesful!]
    $description[Succesfully set prefix to \`$message\`]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})

bot.command({
    name:"logging",
    code:`
    $setServerVar[logid;$message]
    $title[Succesful!]
    $description[Succesfully set logging channel to <#$message>]
    $onlyPerms[admin; You do not have permissions to use this command!]
    $color[$userRoleColor[$authorID]]
    $footer[Made by Andreww#5890]
    `
})


bot.command({
    name: "$alwaysExecute",
    code: `
    Hi <@$authorID>~! My prefix is \`$getServerVar[prefix]\`. type \`$getServerVar[prefix]help\` if you need help!
    $onlyIf[$checkContains[$message;<@$clientID>;<@!$clientID>]==true;]
    `
}) 

bot.onMessage()

bot.variables({
    rch: "",
    rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
    lvl: "0",
    exp: "0",
    rexp: "40",
    rsystem: "0",
    money: "0",
    cardMoney:"0",
    currency: "¥",
    moneyGot: "0",
    duckCount: "0",
    pistolCount: "0",
    coinCount: "0",
    keyboardCount: "0",
    rankBg:`https://cdn.discordapp.com/attachments/853303050332799006/857498056139210752/rankcard.png`,
    prefix:"|",
    logid:"0",
    title:"This is a title",
    description:"This is a description",
    color: "37383e",
    thumbnail:"https://media.discordapp.net/attachments/826036269690650664/869822849865613312/TNS.png?width=226&height=235",
    image:"https://media.discordapp.net/attachments/826036269690650664/869823735111221318/TNS.png?width=619&height=464",
    footer:""
})