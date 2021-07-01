import { getPolice } from './getPolice'
import { Town } from './_common'

export function getTownMilitary (town: Town): string {
  const police = getPolice(town.factions)
  const roll = town.roll.military

  if (police.type === 'guards') {
    if (roll > 90) return `The guard is extremely strict, with citizens being forced to carry licenses, identification papers, and travel permits. The local guard, <<profile ${police.key}>>, is extremely well armed, and brutality is commonplace.`
    if (roll > 80) return `The guards are very strict, with citizens being forced to carry licenses and travel permits. The local guard, <<profile ${police.key}>>, is well armed, and brutality is common.`
    if (roll > 70) return `There is a strong policing presence, with citizens seeking to live in the city being forced to undergo background checks. The local guard, <<profile ${police.key}>>, is well armed, and brutality is not unheard of.`
    if (roll > 60) return `There's a decent policing presence, and citizens know better than to step out of line, as <<profile ${police.key}>> are armed. Despite this, brutality is rare, and citizens with nothing to hide have nothing to fear.`
    if (roll > 50) return `There is a policing presence in ${town.name}, but it is more for outside intruders rather than the population inside. Citizens are expected to follow the laws, and those that do have nothing to fear from <<profile ${police.key}>>.`
    if (roll > 30) return `The policing presence in ${town.name} is more of a militia; some of the members of <<profile ${police.key}>> are part time, and there is little need for the use of force outside of intruders.`
    if (roll > 20) return `The policing presence in ${town.name} is a militia; most of the guards of <<profile ${police.key}>> are part time, and there is little need for the use of force. Citizens act with honesty, and have no need for 24/7 guards.`
    return `The policing presence in ${town.name} is a militia; the guards of <<profile ${police.key}>> are part time, and there is rarely any need for the use of force. Law breakers are judged by community tribunals.`
  }

  if (roll > 90) return `The policing carried out by ${police.name} is extremely strict, with citizens being forced to carry licenses, identification papers, and travel permits. <<profile ${police.key}>> control the $town.type, and are extremely well armed, with brutality being commonplace.`
  if (roll > 80) return `${police.name} are very strict, with citizens being forced to carry licenses and travel permits. The law is enforced by <<profile ${police.key}>>, who are well armed, and brutality is common.'`
  if (roll > 70) return `There is a strong guard presence enacted by ${police.name}, with citizens seeking to live in the city being forced to undergo background checks. <<profile ${police.key}>> are well armed, and brutality is not unheard of.'`
  if (roll > 60) return `There's a decent guard presence, and citizens know better than to step out of line, as <<profile ${police.key}>> are armed. Despite this, brutality is rare, and citizens with nothing to hide have nothing to fear.`
  if (roll > 50) return `There is a guard presence in ${town.name}, but it is more for outside intruders rather than the population inside. Citizens are expected to follow the laws, and those that do have nothing to fear from <<profile ${police.key}>>, who take care of policing matters.`
  if (roll > 40) return `The guard presence in ${town.name} is somewhat smaller than one would expect for its size, perhaps due in part because law enforcement is carried out by <<profile ${police.key}>>, who are seen as friends and drinking buddies, rather than horrible tyrants.`
  if (roll > 30) return `The guard presence in ${town.name} is small, and policing is carried out by <<profile ${police.key}>>. There is usually little need for the use of force outside of intruders.`
  if (roll > 20) return `The guard presence in ${town.name} is a militia; policing is carried out by <<profile ${police.key}>>, and there is little need for the use of force. Citizens act with honesty, and have no need for 24/7 guards.`
  return `The guard presence in ${town.name} is a militia; policing is carried out by <<profile ${police.key}>>, and there is rarely any need for the use of force. Law breakers are judged by community tribunals.`
}
