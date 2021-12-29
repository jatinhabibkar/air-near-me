import { getdata } from "../getdataLoc"

test("check color",()=>{
    expect(getdata(50).colorbg).toBe("#63C889")
    expect(getdata(99).colorbg).toBe("#33B374")
    expect(getdata(199).colorbg).toBe("#CE3D32")
    expect(getdata(900).colorbg).toBe("#7F2422")
})