module.exports = ({
    name: "help",
    code: `$title[Help]
    $dm[$authorID]
    $description[
    Hello! My prefix is \`$getServerVar[prefix]\`]

    $addField[**__Utility Commands__**;
    <:blurple_join:854004261486329876> **Date** - __Shows the current date__
    <:blurple_join:854004261486329876> **Time** - __Shows the current time__
    <:blurple_join:854004261486329876> **BotInfo** - __Shows the info about bot__
    <:blurple_join:854004261486329876> **UserInfo** - __Shows the info about user__
    <:blurple_join:854004261486329876> **Suggest {message}** - __Suggest a new feature for the bot!__
    (You must mention someone if you would like to use this command!)
    
    ;no]

    $addField[**__Music Commands__**; 
    <:blurple_join:854004261486329876> **Play** - __Plays a songs from youtube__
    <:blurple_join:854004261486329876> **Skip** - __Skips the current song__
    <:blurple_join:854004261486329876> **Queue** - __Shows the queue__
    <:blurple_join:854004261486329876> **LoopSong** - __Loops the current song__
    <:blurple_join:854004261486329876> **LoopQueue** - __Loops the queue__
    
    ;no]

    $addField[**__Fun Commands__**; 
    <:blurple_join:854004261486329876> **Rate** - __Rates the thing you wrote__
    <:blurple_join:854004261486329876> **8ball** - __Replies to a yes/no question__
    <:blurple_join:854004261486329876> **Rank** - __Shows your rank__
    (It may take some time to load!)
    <:blurple_join:854004261486329876> **kiss {@mention}** - __Kiss someone you love__
    (You must mention someone if you would like to use this command!)
    <:blurple_join:854004261486329876> **hug {@mention}** - __Hug someone you love__
    (You must mention someone if you would like to use this command!)
    <:blurple_join:854004261486329876> **use coin** - __Uses the lucky coin, gives random ammount of money (2500 - 10000)__
    <:blurple_join:854004261486329876> **Rob {@mention}** - __Rob the mentioned person of their money__
    ;no]
    
    $addField[**__Currency commands!__**;
        <:blurple_join:854004261486329876> **Work** - __Work to earn some money__
        <:blurple_join:854004261486329876> **Bal {@mention}** - __Shows the balance of the mentioned user__
        (You must mention someone if you would like to use this command!)
        <:blurple_join:854004261486329876> **Shop** - __Shows the shop__
        <:blurple_join:854004261486329876> **Shop-cards** - __Shows the rank card shop__
        <:blurple_join:854004261486329876> **Buy {ItemName}** - __Buys the item you named!__
        (When using this command replace {ItemName} with the ID of the item!)
        <:blurple_join:854004261486329876> **Inv {@mention}** - __Shows the inventory of the mentioned user__
        (You must mention someone if you would like to use this command!)
        *More coming* ***soon***
    ;no]

    $addField[**__Embed Maker Commands__**;
        <:blurple_join:854004261486329876> **embedHelp** - __Shows the help sheet of the embed.__
        <:blurple_join:854004261486329876> **title {title}** - __Sets the title of the embed.__
        <:blurple_join:854004261486329876> **description {description}** - __Sets the description of the embed.__
        <:blurple_join:854004261486329876> **image {image}** - __Sets the image of the embed.__
        <:blurple_join:854004261486329876> **thumbnail {thumbnail}** - __Sets the thumbnail of the embed.__
        <:blurple_join:854004261486329876> **color {color}** - __Sets the color of the embed.__
        <:blurple_join:854004261486329876> **showembed** - __Shows the embed.__    
    ;no]

    $addField[**__Admin Commands__**;
        <:blurple_join:854004261486329876> **Ban** - __Bans the user whos ID was mentioned__
        <:blurple_join:854004261486329876> **Kick** - __Kicks the user whos ID was mentioned__
        <:blurple_join:854004261486329876> **setrank #ChannelName** - __Enables rank-up messages in the channel that was mentioned__
        <:blurple_join:854004261486329876> **setrankmsg {Message}** - __Sets the rank-up message__
        <:blurple_join:854004261486329876> **set-currency {message}** - __Sets the currency symbol for bot__
        <:blurple_join:854004261486329876> **logging {logChannelID}** - __Sets the logging channel of your server__        
    ;no]
        
    $addField[__**Basic Commands**__;
        <:blurple_join:854004261486329876> **Help** - __Shows this embed__ 
        <:blurple_join:854004261486329876> **Ping** - __Shows the current Ping of the Bot__ 
        <:blurple_join:854004261486329876> **Usage** - __Shows the usage of the Bot__ 
        <:blurple_join:854004261486329876> **Invite** - __Invite the bot!__ 
        
    ;no]
    $footer[Made by Andreww#5890]
    $color[$userRoleColor]`
});