module.exports = {
  params: {
    GP0: {type: 'net', value: 'GP0'},
    GP1: {type: 'net', value: 'GP1'},
    GP2: {type: 'net', value: 'GP2'},
    GP3: {type: 'net', value: 'GP3'},
    GP4: {type: 'net', value: 'GP4'},
    GP5: {type: 'net', value: 'GP5'},
    GP6: {type: 'net', value: 'GP6'},
    GP7: {type: 'net', value: 'GP7'},
    GP8: {type: 'net', value: 'GP8'},
    GP9: {type: 'net', value: 'GP9'},
    GP10: {type: 'net', value: 'GP10'},
    GP11: {type: 'net', value: 'GP11'},
    GP12: {type: 'net', value: 'GP12'},
    GP13: {type: 'net', value: 'GP13'},
    GP14: {type: 'net', value: 'GP14'},
    GP15: {type: 'net', value: 'GP15'},
    GP26: {type: 'net', value: 'GP26'},
    GP27: {type: 'net', value: 'GP27'},
    GP28: {type: 'net', value: 'GP28'},
    GP29: {type: 'net', value: 'GP29'},
    _3V3: {type: 'net', value: '3V3'},
    GND: {type: 'net', value: 'GND'},
    _5V: {type: 'net', value: '5V'}
  },
  body: p => {
    const body = `
    (module rp2040_zero_tht_pads (layer F.Cu)
      ${p.at}
      (attr through_hole)
      (fp_rect (start -9 -11.75 ${p.rot + 180}) (end 9 11.75 ${p.rot + 180}) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 180245d9-4a3f-4d1b-adcc-b4eafac722e0))
      (fp_line (start -6.096 7.436 ${p.rot + 180}) (end -5.334 7.436 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp 0e0a4b84-f32d-4d0d-bb01-e1a33da32acb))
      (fp_line (start -5.334 -5.518 ${p.rot + 180}) (end -6.096 -5.518 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp 1a657991-5c9c-41a4-9f2e-22f0c7450b3a))
      (fp_line (start -5.334 7.436 ${p.rot + 180}) (end -5.334 -5.518 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp 1c55eaff-dfb6-4adc-bdb2-1121eb73358d))
      (fp_line (start -6.096 9.25 ${p.rot + 180}) (end -6.096 7.436 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp 4445e598-1c38-4291-936b-eafc95d0cf78))
      (fp_line (start -6.096 9.25 ${p.rot + 180}) (end 6 9.25 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp 6d4529c3-e736-41f4-9e85-842fded7472a))
      (fp_line (start 6 9.25 ${p.rot + 180}) (end 6 -11.75 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp 96e87ac2-5565-47ab-ae62-263f85b93211))
      (fp_line (start -6.096 -5.518 ${p.rot + 180}) (end -6.096 -11.75 ${p.rot + 180}) (layer "Edge.Cuts") (width 0.12) (tstamp fe9073de-b4ae-429c-945b-a199d6313a17))
      (pad 1 thru_hole oval (at 7.62 -10.16 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp a67b97a6-51fd-4a32-8231-3fd10436b6ab) ${p.GP0.str})
      (pad 2 thru_hole oval (at 7.62 -7.62 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 68f7174d-ce7a-41b4-89f8-dd7e3ded57a1) ${p.GP1.str})
      (pad 3 thru_hole oval (at 7.62 -5.08 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp da7e6488-201f-4286-b86a-ca5aced3697a) ${p.GP2.str})
      (pad 4 thru_hole oval (at 7.62 -2.54 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 2b7c4f37-42c0-4571-a44b-b808484d3d74) ${p.GP3.str})
      (pad 5 thru_hole oval (at 7.62 0 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp abe3c03e-744a-4406-8e50-6a10745f0c43) ${p.GP4.str})
      (pad 6 thru_hole oval (at 7.62 2.54 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 771cb5c1-62ba-4cca-999e-cdcbe417213c) ${p.GP5.str})
      (pad 7 thru_hole oval (at 7.62 5.08 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 6a1ae8ee-dea6-4015-b83e-baf8fcdfaf0f) ${p.GP6.str})
      (pad 8 thru_hole oval (at 7.62 7.62 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 5a319d05-1a85-43fe-a179-ebcee7212a03) ${p.GP7.str})
      (pad 9 thru_hole oval (at 7.62 10.16 ${p.rot + 180}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 2e6b1f7e-e4c3-43a1-ae90-c85aa40696d5) ${p.GP8.str})
      (pad 10 thru_hole oval (at 5.08 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 04d60995-4f82-4f17-8f82-2f27a0a779cc) ${p.GP9.str})
      (pad 11 thru_hole oval (at 2.54 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 70abf340-8b3e-403e-a5e2-d8f35caa2f87) ${p.GP10.str})
      (pad 12 thru_hole oval (at 0 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 4f2f68c4-6fa0-45ce-b5c2-e911daddcd12) ${p.GP11.str})
      (pad 13 thru_hole oval (at -2.54 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 47993d80-a37e-426e-90c9-fd54b49ed166) ${p.GP12.str})
      (pad 14 thru_hole oval (at -5.08 10.16 ${p.rot + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 0a4f1792-568b-402b-9700-fd4b01130ff8) ${p.GP13.str})
      (pad 15 thru_hole oval (at -7.62 10.16 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 867e444b-3681-4baf-9d08-1188c3544771) ${p.GP14.str})
      (pad 16 thru_hole oval (at -7.62 7.62 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 9c4384c0-9a57-4262-8711-eec9b8ecb4c6) ${p.GP15.str})
      (pad 17 thru_hole oval (at -7.62 5.08 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp a20b891b-a240-411f-9914-9ac989f03074) ${p.GP26.str})
      (pad 18 thru_hole oval (at -7.62 2.54 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 761a1a33-98a4-41af-9660-18c12d51b442) ${p.GP27.str})
      (pad 19 thru_hole oval (at -7.62 0 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 2caa1d4c-02f2-443a-a145-dc5854878c73) ${p.GP28.str})
      (pad 20 thru_hole oval (at -7.62 -2.54 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 1b7a2775-7631-4d4f-8b27-ab588adb3b7d) ${p.GP29.str})
      (pad 21 thru_hole oval (at -7.62 -5.08 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 75b890e6-df6d-4a6e-acaa-0870cda0d189) ${p._3V3.str})
      (pad 22 thru_hole oval (at -7.62 -7.62 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp e4d9ec61-16f7-410d-891d-89481964ef82) ${p.GND.str})
      (pad 23 thru_hole oval (at -7.62 -10.16 ${p.rot}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) (tstamp 8a11f86e-586e-495d-a11e-a1e650589934) ${p._5V.str})
    )
    `
    return body
  }
}
