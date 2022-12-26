const readline = require("readline-sync");

class Circle {
    constructor(tam = new Point(), banKinh = 0) {
        this.tam = tam;
        this.banKinh = banKinh;
    }
    scan() {
        var x = Number(readline.question('nhap x: '));
        var y = Number(readline.question('nhap y: '));
        this.tam = new Point(x, y);
    }
    print() {
        console.log(`Tâm: (${this.tam.x}, ${this.tam.y}); Bán kính: ${this.banKinh}`)
    }
    move(dx, dy) {
        this.tam.x += dx
        this.tam.y += dy
    }
    setBanKinh(){
        this.banKinh = Number(readline.question('Nhap ban kinh: '));
    }
    getArea() {
        return (this.banKinh ** 2) * 3.14;
    }
}

class Point {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
    scan() {
        this.x = Number(readline.question('nhap x: '))
        this.y = Number(readline.question('nhap y: '))

    }
    print() {
        console.log(`(${this.x}, ${this.y})`)
    }
    move(dx, dy) {
        this.x += dx
        this.y += dy
    }
    getDistance(otherPoint) {
        return Math.sqrt((this.x - otherPoint.x) ** 2 + (this.y - otherPoint.y) ** 2)
    }
}
class Program {
    // constructor() {
    //     this.luaChon = 0
    //     this.po = new Point()
    // }
    constructor() {
        this.luaChon = 0
        this.po = new Circle()
    }
    run() {
        let tieptuc = "1"
        do {
            console.clear()
            this.inMenu()
            this.luaChon = Number(readline.question('ban chon: '))
            switch (this.luaChon) {
                case 1:
                    this.cnNhap()
                    break
                case 2:
                    this.cnXuat()
                    break
                case 3:
                    this.cnDichuyen()
                    break
                case 4:
                    this.cnTinhKhoangCach()
                    break
                case 5:
                    this.cnTinhDienTichHinhTron()
                    break

            }
            tieptuc = readline.question('nhan 1 de tiep tuc, 0 de dung lai: ')
        } while (tieptuc == "1")
    }
    inMenu() {
        console.log('1. Nhap')
        console.log('2. Xuat')
        console.log('3. Di chuyen')
        console.log('4. Tinh khoang cach')
        console.log('5. Tinh dien tich hinh tron')
    }
    cnNhap() {
        this.po.scan()
        console.log('Diem vua nhap la: ')
        this.po.print()
    }
    cnXuat() {
        console.log('Diem dang co la: ')
        this.po.print()
    }
    cnDichuyen() {
        const dx = Number(readline.question('nhap dx: '))
        const dy = Number(readline.question('nhap dy: '))
        this.po.move(dx, dy)
        console.log(this.po)
    }
    cnTinhKhoangCach() {
        const other = new Point()
        other.scan()
        const d = this.po.getDistance(other)
        console.log('Khoang cach:', d)
    }
    cnTinhDienTichHinhTron() {
        this.po.setBanKinh()
        const d = this.po.getArea()
        console.log('Dien tich:', d)
    }
}

function main() {
    // const p1 = new Point()
    // const p2 = new Point(3,4)
    // // p1.scan()
    // // p1.print()
    // // p1.move(1, 1)
    // const d = p1.getDistance(p2)
    // console.log('khoang cach: ', d)
    const program = new Program()
    program.run()

}
main()

