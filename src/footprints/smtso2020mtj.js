// Sinhoo SMTSO2020MTJ 
// Mounting hole and solder ring for PCB solder nut (M2)
// https://www.lcsc.com/product-detail/_Sinhoo-_C2916384.html
// https://datasheet.lcsc.com/lcsc/2112061830_Sinhoo-SMTSO2020MTJ_C2916384.pdf
module.exports = {
    params: {
        class: 'SMTSO',
    },
    body: p => `
    (module "SMTSO2020MTJ" 
      ${p.at /* parametric position */}

      (pad "" np_thru_hole circle (at 0 0) (size 3.8 3.8) (drill 3.8) (layers *.Mask) (tstamp 44216b30-6afe-425e-a43d-9a7ecfd6817d))
      (pad "1" smd circle (at 0 0) (size 6.2 6.2) (layers "B.Cu" "B.Mask") (tstamp a69e605a-9052-440f-bcc9-68da52cfa154))
    )`
}
