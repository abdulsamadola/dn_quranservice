// export const reciterData = [
//   {
//     id: "1",
//     reciterName: "Dr Abdur-Razaq Alaro",
//     reciterDesc: "Yoruba translation",
//     reciterURL: "http://185.164.35.20:8010/alaro.aac"
//   },
//   {
//     id: "2",
//     reciterName: "Qaari Gwani Dahir",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8010/gwanidahir.aac"
//   },
//   {
//     id: "3",
//     reciterName: "Qaari Gwani Sadiqu",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8010/gwanisadiqu.aac"
//   },
//   {
//     id: "4",
//     reciterName: "Qaari Ibrahim Al-Maa'i",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8020/almaai.aac"
//   },
//   {
//     id: "5",
//     reciterName: "Qaari Ibrahim Abba",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8020/ibabba.aac"
//   },
//   {
//     id: "6",
//     reciterName: "Qaari Ibrahim Muhammadul-Awwal",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8020/ibawwal.aac"
//   },
//   {
//     id: "7",
//     reciterName: "Qaari Ibrahim Yahya",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8010/ibyahya.aac"
//   },
//   {
//     id: "8",
//     reciterName: "Qaari Ibrahim Yahya",
//     reciterDesc: "Talqeen",
//     reciterURL: "http://185.164.35.20:8010/ibyahyatalqeen.aac"
//   },
//   {
//     id: "9",
//     reciterName: "Qaari Ibrahim Yahya",
//     reciterDesc: "Chorus",
//     reciterURL: "http://185.164.35.20:8010/ibyahyachorus.aac"
//   },
//   {
//     id: "10",
//     reciterName: "Qaari Ibrahim Yahya",
//     reciterDesc: "Translation",
//     reciterURL: "http://185.164.35.20:8010/ibyahyayor.aac"
//   },
//   {
//     id: "11",
//     reciterName: "Qaari Ismail Musa",
//     reciterDesc: "Adaby",
//     reciterURL: "http://185.164.35.20:8030/ismailmusa.aac"
//   },
//   {
//     id: "12",
//     reciterName: "Qaari Kabiru Daura",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8020/kabirudaura.aac"
//   },
//   {
//     id: "13",
//     reciterName: "Qaari Sa'eed Haroon",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8020/said.aac"
//   },
//   {
//     id: "14",
//     reciterName: "Qaari Salim Muhd-Awwal",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8030/salimawwal.aac"
//   },
//   {
//     id: "15",
//     reciterName: "Qaari Usman Birini Kebbi",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8020/usmankebbi.aac"
//   },
//   {
//     id: "16",
//     reciterName: "Shaykh Yahudha Bauchi",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8030/yahudha.aac"
//   },
//   {
//     id: "17",
//     reciterName: "Shaykh Abdullah Abba",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8030/abdullahabba.aac"
//   },
//   {
//     id: "18",
//     reciterName: "Shaykh Ibrahim Ahmad Sulayman",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8030/ibsulaiman.aac"
//   },
//   {
//     id: "19",
//     reciterName: "Shaykh Mahmud Jaafar",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8030//mahmoodjafar.aac"
//   },
//   {
//     id: "20",
//     reciterName: "Ustadh Abdur-Rahmaan Yola",
//     reciterDesc: "",
//     reciterURL: "http://185.164.35.20:8010/rahmanyola.aac"
//   },
//   {
//     id: "21",
//     reciterName: "Qaari Salih Musa Ozovehe",
//     reciterDesc: "Adabiy",
//     reciterURL: "http://185.164.35.20:8030/salihozovehe.aac"
//   }
// ];

// export const reciterData2 = () => {
//   fetch("http://dawahnigeria.com/dn_qs.json", { method: "get" })
//     .then(res => res.json())
//     .then(resp => {
//       console.log(resp);

//       return resp;
//     })
//     .catch(e);
//   {
//     console.log(e);
//   }
// };

export async function reciterData() {
  try {
    let user = await fetch("http://dawahnigeria.com/dn_qs.json", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    let result = user.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
