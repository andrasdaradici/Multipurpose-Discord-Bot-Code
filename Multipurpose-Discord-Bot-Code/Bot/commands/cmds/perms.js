module.exports = ({
    name: "perms",
    code: `
    $title[Usage]
    $description[**Permissions of <@&$mentionedRoles[1]> :** \`\`\`$rolePerms[$mentionedRoles[1];, ]\`\`\`]
    $color[$userRoleColor]
    $onlyPerms[admin;Only cool people with admin perms can use this!]
    $footer[Made by Andreww#5890]`
});