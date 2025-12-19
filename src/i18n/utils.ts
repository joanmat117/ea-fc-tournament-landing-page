export async function getTranslation(lang:'es'|'en'|'fr'|string){
  const l = lang !== 'es' && lang !== 'en' && lang !== 'fr' ? 'es' : lang
  const t = await import(`../i18n/${l}.json`)
  return t
}
