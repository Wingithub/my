function tinhLaiDon(sotienVay, laiSuat, soNam) {
    let laiHangNam = sotienVay * laiSuat / 100;
    let tongTienPhaiTra = sotienVay + laiHangNam * soNam;

    return tongTienPhaiTra;
}
let sotienVay = 50; // Số tiền vay (triệu đồng)
let laiSuat = 8;    // Lãi suất (tính theo phần trăm)
let soNam = 9;      // Số năm

let ketQua = tinhLaiDon(sotienVay, laiSuat, soNam);
console.log("Số tiền phải trả sau " + soNam + " năm là: " + ketQua + " triệu đồng");