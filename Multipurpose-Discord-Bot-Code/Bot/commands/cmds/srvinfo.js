module.exports = ({
    name: "serverinfo",
    code: `$title[User Info]
    $description[
    **Server Name:** __$serverName__

    **Servers Region:** __$serverRegion__

    **The Server Owner Is :** <@$ownerID>
 
    **This server has $serverBoostCount boosts!**

    <:Categories:813725049390628885> **Categories**
    $channelCount[category]

    <:Channel:813725063857700874> **Text Channels**
    $channelCount[text]

    <:Voice:813725527902650388> **Voice Channels**
    $channelCount[voice]
   
    **Server Roles:** 
    $guildRoles[mention]

    **Server Bot Count:** $botCount

    **Server Member Count:** $membersCount

    **This server was created at the date of :** __$creationDate[$guildID]__
   
    <:Emoji:813727497815851029> **Server Emoji Count:** $emojiCount

    **Server Emojis:** \n$serverEmojis

    $color[$userRoleColor]
    $thumbnail[$serverIcon]]
    $footer[Made by Andreww#5890]
    `
});