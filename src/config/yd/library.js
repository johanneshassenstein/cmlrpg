const Library = {
  errorUnknown: 'Something mysterious happened',
  errorMoveInCombat: 'You are fighting, do not try to flee!',
  errorNoCombat: 'You are currently not in a fight.',
  errorNoValidDirection: 'It seems, that the direction you are trying to move in is non existent.',
  errorNoTasks: 'There are currently no tasks available.',
  north: 'north',
  east: 'east',
  south: 'south',
  west: 'west',
  move: [
    'You move to the {direction} into a {area}.',
    'You move in {direction}ern direction, entering a {area} shortly after.',
    'You start moving into the {direction}. You enter a {area}.'
  ],
  encounter: [
    "You are immedeatly attacked by a {enemyBehavior} {enemyName}, wielding a {enemyWeapon}. The enemy shouts: '{enemyBattlecry}' while hurdling at you!",
    "A {enemyBehavior} {enemyName} jumps out behind you! [enemyGender:m->he,f->she,n->it] has a {enemyWeapon} and is screaming: '{enemyBattlecry}'",
    "Whoah! What was that? '{enemyBattlecry}' it sounds from up close. A {enemyBehavior} {enemyName}, wielding a {enemyWeapon}!",
  ],
  taskFinished: [
    '{taskEpilog} You [{playerLevel} | {playerHealth}/{playerMaxHealth}] have gained {taskXP}XP. {taskProlog}'
  ],
  dodgePlayer: [
    "You [{playerHealth}/{playerMaxHealth}] throw yourself into cover {:1F4A8}.",
    "You [{playerHealth}/{playerMaxHealth}] swiftly strive to the side {:1F605}.",
    "As quick as possible you [{playerHealth}/{playerMaxHealth}] throw yourself on the ground {:1F4A8}."
  ],
  reloadPlayer: [
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] push a round into your {playerWeapon} [{playerWeaponDamage} | {playerAmmunition}/{playerMaxAmmunition}].",
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] reload your {playerWeapon} [{playerWeaponDamage} | {playerAmmunition}/{playerMaxAmmunition}].",
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] put a shot into the {playerWeapon} [{playerWeaponDamage} | {playerAmmunition}/{playerMaxAmmunition}]."
  ],
  reloadFailedPlayer: [
    'You [{playerLevel} | {playerHealth}/{playerMaxHealth}] try tro cramp another shot into your already full {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}].',
    'You [{playerLevel} | {playerHealth}/{playerMaxHealth}] try to reload the {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}], but it`s already fully loaded.'
  ],
  shootPlayer: [
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] fire your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] {:1F4A5} and it does a {playerWeaponSound}, dealing a whopping {playerDamage} points of damage to your enemy - his {enemyArmor} {enemyArmorSound}s.",
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] unload the {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] {:1F4A5} into the opposing {enemyName} with {playerDamage} points of damage - a loud '{playerWeaponSound}' sounds.",
    "Cock, Aim, Fire {:1F4A5}! Your [{playerLevel} | {playerHealth}/{playerMaxHealth}] {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] deals {playerDamage} points of damage to the enemy {enemyName}."
  ],
  shotMissedPlayer: [
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] fire your {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}], which {playerWeaponSound}s, but you miss!",
    "You [{playerLevel} | {playerHealth}/{playerMaxHealth}] shoot the {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}], but you miss slightly!",
    "The shot you [{playerLevel} | {playerHealth}/{playerMaxHealth}] let loose from your {playerWeapon} misses!"
  ],
  noAmmunitionPlayer: [
    'You [{playerLevel} | {playerHealth}/{playerMaxHealth}] try to fire your unloaded {playerWeapon} [{playerAmmunition}/{playerMaxAmmunition}] and unsurprisingly fail to do so!'
  ],
  diePlayer: [
    "The opposing {enemyName} mortally wounded you {:1F635}. You ache in pain, shout your last: '{playerDeathcry}' and sink to the ground."
  ],
  dodgeEnemy: [
    "The enemy {enemyName} [{enemyHealth}/{enemyMaxHealth}] throws [enemyGender:m->himself,f->herself,n->itself] into cover.",
    "The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] swiftly strives to the side.",
    "The enemy [{enemyHealth}/{enemyMaxHealth}] quickly throws [enemyGender:m->himself,f->herself,n->itself] to the ground."
  ],
  reloadEnemy: [
    "The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] pushes a round into the {enemyWeapon}.",
    "The enemy {enemyName} [{enemyHealth}/{enemyMaxHealth}] reloads the {enemyWeapon}.",
    "The opponent [{enemyHealth}/{enemyMaxHealth}] puts a shot into [enemyGender:m->his,f->her,n->its] {enemyWeapon}."
  ],
  reloadFailedEnemy: [
    'Your enemy [{enemyHealth}/{enemyMaxHealth}] tries to load another shot, but [enemyGender:m->his,f->her,n->its] {enemyWeapon} is already fully loaded.'
  ],
  shootEnemy: [
    "The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] fires [enemyGender:m->his,f->her,n->its] {enemyWeapon} {:1F4A5} and it does a {enemyWeaponSound}, dealing a whopping {enemyDamage} points of damage to you - your {playerArmor} {playerArmorSound}s.",
    "The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] unloads [enemyGender:m->his,f->her,n->its] {enemyWeapon} {:1F4A5} with {enemyDamage} points of damage - a loud '{enemyWeaponSound}' sounds.",
    "The opposing {enemyName}s [{enemyHealth}/{enemyMaxHealth}] {enemyWeapon} deals {enemyDamage} points of damage to you {:1F4A5}."
  ],
  shotMissedEnemy: [
    'The opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] misses you slightly with [enemyGender:m->his,f->her,n->its] {enemyWeapon}.'
  ],
  noAmmunitionEnemy: [
    'Your enemy [{enemyHealth}/{enemyMaxHealth}] has no shots left but still tries to shoot, stupid...'
  ],
  dieEnemy: [
    "You wounded the opposing {enemyName} [{enemyHealth}/{enemyMaxHealth}] badly with your {playerWeapon} {:2620}. [enemyGender:m->He,f->She,n->It] sinks to the ground, mortally wounded, shouting in agony: '{enemyDeathcry}'. You have gained {xpGain}XP."
  ],
  lookDifferent: [
    'You look to the {direction}. You see a {close} upclose and a {far} in the distance.',
    'You look in {direction}ern direction. Infront of you there is a {close}, a {far} is further away.',
    'You start looking into the {direction}. You gaze upon a {far} in the distance while standing infront of a {close}.'
  ],
  lookSame: [
    'You look to the {direction}. You see a {close} that continues in the distance.',
    'You look in {direction}ern direction. Infront of you there is a {close}, which continues in the distance.',
    'You start looking into the {direction}. A {close} stretches up to the horizon.'
  ],
  task: [
      'Chapter {taskNumber} - {taskTitle}:\n{taskDescription}\n\n{:1F9ED} {taskDirections}\n{:1F4B2} {taskXP}XP'
  ],
  interaction: [
    'It seems that there is something fishy around here. Use player.touch() to find out more.'
  ],
  info: [
      '{:1F636} Lvl. {playerLevel}\n{:2764} {playerHealth}/{playerMaxHealth}\n{:1F4B2} {playerXP}XP / {playerXPGoal}XP\n{:1F52B} {playerWeapon} [{playerWeaponPower} | {playerAmmunition} / {playerMaxAmmunition}]\n{:1F458} {playerArmor} [{playerArmorPower}]'
  ],
  levelup: [
    'You have reached level {playerLevel} {:1F389}{:2728}{:1F38A}{:1F388}!'
  ],
  itemweapon: [
    'You have found a {itemName} [{itemPower} | {itemCapacity}] {:1F52B}. Use player.touch() to equip it. Use player.info() to view your current equipment.'
  ],
  itemarmor: [
    'You have found a {itemName} [{itemPower}] {:1F458}. Use player.touch() to equip it. Use player.info() to view your current equipment.'
  ],
  touchnothing: [
    'There is nothing to touch.'
  ],
  toucharmor: [
    'You have now equipped a {itemName} [{itemPower}] as your armor {:1F458}.'
  ],
  touchweapon: [
    'You have now equipped a {itemName} [{itemPower} | {itemCapacity}] as your weapon {:1F52B}.'
  ],
  playerDied: [
    'You died {:1F648}'
  ]
}
export default Library;
