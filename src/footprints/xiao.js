// Seeduino XIAO with vias for underside pads
// https://github.com/crides/kleeb/blob/master/mcu.pretty/xiao-tht.kicad_mod 
module.exports = {
  params: {
    SV: {type: 'net', value: 'SV'},
    _3V3: {type: 'net', value: '3V3'},
    D0: {type: 'net', value: 'D0'},
    D1: {type: 'net', value: 'D1'},
    D2: {type: 'net', value: 'D2'},
    D3: {type: 'net', value: 'D3'},
    D4: {type: 'net', value: 'D4'},
    D5: {type: 'net', value: 'D5'},
    D6: {type: 'net', value: 'D6'},
    D7: {type: 'net', value: 'D7'},
    D8: {type: 'net', value: 'D8'},
    D9: {type: 'net', value: 'D9'},
    D10: {type: 'net', value: 'D10'}
  },
  body: p => `
    (module "xiao-tht" (version 20211014)
      (layer "F.Cu")
      (tedit 61D9008C)
      (attr through_hole)
      ${p.at /* parametric position */}
      (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 116e44aa-10c6-4541-8b90-5b7a2f5434bd))
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a1111a45-eeef-42a4-8ca2-b88859685c82))
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a6f271d5-ba8a-454d-80cb-5f2f863f2343))
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp bb88374b-bed5-4557-ac17-b524808b3664))
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp f5248a36-36cb-4bf1-a463-d1ff91adf3ac))
      (pad "1" thru_hole oval (at -7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D6.str})
      (pad "2" thru_hole oval (at -7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D5.str})
      (pad "3" thru_hole oval (at -7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D4.str})
      (pad "4" thru_hole oval (at -7.62 0 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D3.str})
      (pad "5" thru_hole oval (at -7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D2.str})
      (pad "6" thru_hole oval (at -7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D1.str})
      (pad "7" thru_hole oval (at -7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D0.str})
      (pad "8" thru_hole oval (at 7.62 7.62 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.SV.str})
      (pad "9" thru_hole oval (at 7.62 5.08 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) GND)
      (pad "10" thru_hole oval (at 7.62 2.54 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p._3V3.str})
      (pad "11" thru_hole oval (at 7.62 0 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D10.str})
      (pad "12" thru_hole oval (at 7.62 -2.54 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D9.str})
      (pad "13" thru_hole oval (at 7.62 -5.08 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D8.str})
      (pad "14" thru_hole oval (at 7.62 -7.62 ${p.rot + 180}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers *.Cu *.Mask) ${p.D7.str})
    )
    `
}
    

