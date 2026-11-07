const PHONE = "972559272658";

/** Builds a wa.me link that opens WhatsApp with the message pre-typed. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

/** CTA buttons: "לתיאום פגישת ייעוץ" / "לקביעת שיחת היכרות". */
export const consultLink = whatsappLink(
  "היי כליל 🙂\nהגעתי דרך האתר שלך ואשמח לקבל פרטים נוספים על הליווי התזונתי."
);

/** Product "לרכישה לחצו" buttons — the message names the product. */
export const productLink = (productName: string) =>
  whatsappLink(
    `היי כליל 🙂\nהגעתי דרך האתר שלך ואשמח לקבל פרטים נוספים על המוצר ${productName}`
  );
