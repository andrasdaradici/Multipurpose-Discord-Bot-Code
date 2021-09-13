module.exports = ({
    name: "userinfo",
    code: `$title[Info]
    $description[
    User: **<@$mentioned[1]>**

    Creation Date: \n**$creationDate[$mentioned[1];time]**

    Joined Server At : \n**$memberJoinedDate[$mentioned[1];time]**

    User Roles : \n$userRoles[$mentioned[1];mentions;   ]
    $color[$userRoleColor[$mentioned[1]]]
    $thumbnail[$userAvatar[$mentioned[1]]]
    $footer[Made by Andreww#5890]
    `
});