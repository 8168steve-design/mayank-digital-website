// Replace these placeholders with your real contact details and profile URLs.
export const config = {
  brand: "MAYANK DIGITAL",
  domain: "https://webmayank.site",
  whatsappNumber: "REPLACE_WITH_COUNTRY_CODE_AND_NUMBER",
  instagramUrl: "https://instagram.com/REPLACE_WITH_USERNAME",
  facebookUrl: "https://facebook.com/",
  telegramUrl: "https://t.me/",
  email: "hello@webmayank.site"
}

export function whatsappLink(message = "Hi Mayank Digital, I am interested in your digital marketing services.") {
  const number = config.whatsappNumber.replace(/\D/g, "")
  if (!number || number === "REPLACE_WITH_COUNTRY_CODE_AND_NUMBER") return "https://wa.me/"
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
