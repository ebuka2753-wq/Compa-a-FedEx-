// ======================================
// REQUESTHUB SCRIPT
// ======================================

// SETTINGS
const WHATSAPP = "2349040071415";
const FEE = "$1,000 USD";


// ======================================
// COUNTRIES
// ======================================

const countries = [
  ["Nigeria","234"],["Ghana","233"],["Kenya","254"],
  ["South Africa","27"],["Egypt","20"],["Morocco","212"],
  ["Algeria","213"],["Tunisia","216"],["United Kingdom","44"],
  ["United States","1"],["Canada","1"],["Mexico","52"],
  ["Brazil","55"],["Argentina","54"],["Colombia","57"],
  ["Chile","56"],["Peru","51"],["France","33"],
  ["Germany","49"],["Italy","39"],["Spain","34"],
  ["Portugal","351"],["Netherlands","31"],["Belgium","32"],
  ["Switzerland","41"],["Austria","43"],["Sweden","46"],
  ["Norway","47"],["Denmark","45"],["Finland","358"],
  ["Poland","48"],["Ireland","353"],["Greece","30"],
  ["Turkey","90"],["Ukraine","380"],["Russia","7"],
  ["China","86"],["Japan","81"],["South Korea","82"],
  ["India","91"],["Pakistan","92"],["Bangladesh","880"],
  ["Indonesia","62"],["Malaysia","60"],["Singapore","65"],
  ["Thailand","66"],["Philippines","63"],["Vietnam","84"],
  ["Australia","61"],["New Zealand","64"],
  ["Saudi Arabia","966"],["United Arab Emirates","971"],
  ["Qatar","974"],["Kuwait","965"],["Bahrain","973"],
  ["Oman","968"],["Israel","972"],["Jordan","962"],
  ["Lebanon","961"],["Iraq","964"],["Iran","98"],
  ["Ethiopia","251"],["Tanzania","255"],["Uganda","256"],
  ["Rwanda","250"],["Cameroon","237"],["Ivory Coast","225"],
  ["Senegal","221"],["Zimbabwe","263"],["Zambia","260"],
  ["Botswana","267"],["Namibia","264"],["Mozambique","258"],
  ["Angola","244"],["Mauritius","230"],["Seychelles","248"],
  ["Sierra Leone","232"],["Liberia","231"],["Gambia","220"],
  ["Guinea","224"],["Benin","229"],["Togo","228"],
  ["Burkina Faso","226"],["Mali","223"],["Niger","227"],
  ["Chad","235"],["Sudan","249"],["Somalia","252"],
  ["Eritrea","291"],["Djibouti","253"],["Libya","218"],
  ["Mauritania","222"],["Madagascar","261"],["Malawi","265"],
  ["Eswatini","268"],["Lesotho","266"],["Comoros","269"],
  ["Gabon","241"],["DR Congo","243"],["Burundi","257"],
  ["South Sudan","211"],["Afghanistan","93"],["Armenia","374"],
  ["Azerbaijan","994"],["Belarus","375"],["Bhutan","975"],
  ["Brunei","673"],["Cambodia","855"],["Georgia","995"],
  ["Kazakhstan","7"],["Kyrgyzstan","996"],["Laos","856"],
  ["Maldives","960"],["Mongolia","976"],["Myanmar","95"],
  ["Nepal","977"],["Sri Lanka","94"],["Tajikistan","992"],
  ["Turkmenistan","993"],["Uzbekistan","998"],
  ["Albania","355"],["Andorra","376"],
  ["Bosnia and Herzegovina","387"],["Bulgaria","359"],
  ["Croatia","385"],["Cyprus","357"],["Czech Republic","420"],
  ["Estonia","372"],["Hungary","36"],["Iceland","354"],
  ["Latvia","371"],["Liechtenstein","423"],["Lithuania","370"],
  ["Luxembourg","352"],["Malta","356"],["Moldova","373"],
  ["Monaco","377"],["Montenegro","382"],["Romania","40"],
  ["Serbia","381"],["Slovakia","421"],["Slovenia","386"],
  ["Bahamas","1"],["Barbados","1"],["Belize","501"],
  ["Costa Rica","506"],["Cuba","53"],["Dominica","1"],
  ["Dominican Republic","1"],["El Salvador","503"],
  ["Grenada","1"],["Guatemala","502"],["Guyana","592"],
  ["Haiti","509"],["Honduras","504"],["Jamaica","1"],
  ["Nicaragua","505"],["Panama","507"],["Paraguay","595"],
  ["Suriname","597"],["Trinidad and Tobago","1"],
  ["Uruguay","598"],["Venezuela","58"],
  ["Antigua and Barbuda","1"],["Saint Lucia","1"],
  ["Saint Vincent and the Grenadines","1"],
  ["Saint Kitts and Nevis","1"],["Papua New Guinea","675"],
  ["Fiji","679"],["Samoa","685"],["Tonga","676"],
  ["Vanuatu","678"],["Solomon Islands","677"],
  ["Kiribati","686"],["Micronesia","691"],
  ["Marshall Islands","692"],["Palau","680"]
];


// ======================================
// LOAD COUNTRY DROPDOWN
// ======================================

function loadCountries() {

  const countrySelect =
    document.getElementById("recipientCountry");

  if (!countrySelect) return;

  countrySelect.innerHTML =
    '<option value="">Select country</option>';

  countries.forEach(([name, code]) => {

    const option = document.createElement("option");

    option.value = name;
    option.textContent = `${name} (+${code})`;

    countrySelect.appendChild(option);

  });
}


// ======================================
// LOAD PHONE CODES
// ======================================

function loadPhoneCodes() {

  const ids = [
    "recipientPhoneCode",
    "recipientWhatsAppCode"
  ];

  ids.forEach(id => {

    const select = document.getElementById(id);

    if (!select) return;

    select.innerHTML = "";

    countries.forEach(([name, code]) => {

      const option = document.createElement("option");

      option.value = code;
      option.textContent = `+${code} ${name}`;

      if (code === "234") {
        option.selected = true;
      }

      select.appendChild(option);

    });

  });
}


// ======================================
// FORMAT PHONE
// ======================================

function formatPhone(code, number) {

  let n = String(number || "")
    .replace(/\D/g, "");

  while (n.startsWith("0")) {
    n = n.substring(1);
  }

  return "+" + code + n;
}


// ======================================
// SEND RECEIVE REQUEST
// ======================================

function setupRequestForm() {

  const form =
    document.getElementById("requestForm");

  if (!form) return;

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
      document.getElementById("recipientName").value.trim();

    const country =
      document.getElementById("recipientCountry").value;

    const state =
      document.getElementById("recipientState").value.trim();

    const city =
      document.getElementById("recipientCity").value.trim();

    const phone =
      formatPhone(
        document.getElementById("recipientPhoneCode").value,
        document.getElementById("recipientPhone").value
      );

    const whatsapp =
      formatPhone(
        document.getElementById("recipientWhatsAppCode").value,
        document.getElementById("recipientWhatsApp").value
      );

    const message =
`📥 REQUESTHUB RECEIVE REQUEST

📥 RECEIVING INFORMATION

Name: ${name}
Country: ${country}
State / Region: ${state}
City: ${city}
Phone: ${phone}
WhatsApp: ${whatsapp}

💵 DELIVERY FEE: ${FEE}

Please review this receiving request.`;

    const url =
      "https://wa.me/" +
      WHATSAPP +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");

  });
}


// ======================================
// START EVERYTHING
// ======================================

document.addEventListener("DOMContentLoaded", function() {

  loadCountries();
  loadPhoneCodes();
  setupRequestForm();

});