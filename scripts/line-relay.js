// Google Apps Script Code สำหรับรับข้อมูลจากเว็บแล้วส่งเข้า LINE
// นำโค้ดนี้ไปวางใน Google Apps Script (https://script.google.com)

const CHANNEL_ACCESS_TOKEN = "vm1YHlIyay9DpCz13S/qDHK7jeWwKXiCF7/hsNfyfF1m/YHBqwVxoVOsq3SD2UpZBfjmWtQ5wbDypyKdJ4U4Gh6lrEQ2vvwPUXxlPEuW995RGQY9BMfI/ZEHeqql8JYKEsnBpvDLSXHv4MmF6MaUTgdB04t89/1O/w1cDnyilFU=";
const USER_ID = "U3a9a60614f3d540ce7c3d8d8bc7077ec";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const author = data.author || "ผู้ใช้นิรนาม";
    const category = data.category || "ทั่วไป";
    const place = data.place || "-";
    const details = data.details || "-";

    const messageText = 
      "🔔 มีคนแนะนำร้าน/ข้อมูลใหม่บนเว็บ SRC News!\n" +
      "━━━━━━━━━━━━━━━━━━\n" +
      "👤 ผู้ส่ง: " + author + "\n" +
      "📂 หมวดหมู่: " + category + "\n" +
      "📍 ชื่อสถานที่: " + place + "\n" +
      "📝 รายละเอียด: " + details + "\n" +
      "⏰ เวลา: " + new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });

    // ส่งเข้า LINE
    const lineUrl = "https://api.line.me/v2/bot/message/push";
    const payload = {
      to: USER_ID,
      messages: [
        {
          type: "text",
          text: messageText
        }
      ]
    };

    UrlFetchApp.fetch(lineUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
