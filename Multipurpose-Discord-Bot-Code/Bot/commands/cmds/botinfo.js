module.exports = ({
    name: "botinfo",
    code: `$title[Info About Bot]
    $description[
    Bot name: **Sumi Sakurasawa#4210**

    Bot creator : **Andreww#5890**

    Creation Date: \n**$creationDate[854712497415782411;time]**

    Joined Server At : \n**$memberJoinedDate[854712497415782411;time]**

    User Roles : \n$userRoles[854712497415782411;mentions; ] 
    
    Bot users : **$allMembersCount**
    
    Server Count : **$serverCount**]
    $color[facfdf]
    $thumbnail[$userAvatar[854712497415782411]]
    $footer[Made by Andreww#5890]
    `
});