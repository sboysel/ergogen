// Seeduino XIAO BLE THT
// https://wiki.seeedstudio.com/XIAO_BLE/
// https://github.com/crides/kleeb/blob/master/mcu.pretty/xiao-ble-tht.kicad_mod 
module.exports = {
  params: {
    _5V: {type: 'net', value: '5V'},
    GND: {type: 'net', value: 'GND'},
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
    D10: {type: 'net', value: 'D10'},
    DIO: {type: 'net', value: 'DIO'},
    CLK: {type: 'net', value: 'CLK'},
    BATP: {type: 'net', value: 'BAT+'}
  },
  body: p => `
    (module "xiao-ble-smd-reversible" (version 20211014)
      (layer "F.Cu")
      (attr smd exclude_from_pos_files)
      ${p.at /* parametric position */}
      (fp_text reference "U1" (at -19.3989 -11.28268) (layer "F.SilkS") hide
        (effects (font (size 0.889 0.889) (thickness 0.1016)))
        (tstamp 88071c39-7478-4d42-a0c9-ea227d61f16f)
      )
      (fp_text value "xiao-ble-thruhole" (at -19.8434 -0.29718) (layer "F.SilkS") hide
        (effects (font (size 0.6096 0.6096) (thickness 0.0762)))
        (tstamp fb9b0b15-c800-4199-a9df-1e999ba6a70c)
      )
      (fp_rect (start -3.350197 -6.785813) (end -5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start 3.507811 -8.182813) (end 5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start -3.350197 -10.849813) (end -5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start 8.89 10.5) (end -8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_rect (start 5.285811 -6.785813) (end 3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) )
      (fp_line (start -1.27 -2.984) (end 1.27 -2.984) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start -1.778 -6.032) (end -1.778 -3.492) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start 4.953 -0.317) (end 4.953 2.223) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start -2.921 2.731) (end -4.445 2.731) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start 2.921 2.731) (end 4.445 2.731) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start -2.921 -0.317) (end -4.953 -0.317) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start -4.953 -0.317) (end -4.953 2.223) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start 2.413 0.191) (end 2.413 2.223) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start 2.921 -0.317) (end 4.953 -0.317) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start -2.413 0.191) (end -2.413 2.223) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start 1.778 -6.032) (end 1.778 -3.492) (layer "Edge.Cuts") (width 0.12) )
      (fp_line (start -1.778 -6.032) (end 1.778 -6.032) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start 1.778 -3.492) (mid 1.62921 -3.13279) (end 1.27 -2.984) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start 2.921 2.731) (mid 2.56179 2.58221) (end 2.413 2.223) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start -2.921 -0.317) (mid -2.56179 -0.16821) (end -2.413 0.191) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start -4.445 2.731) (mid -4.80421 2.58221) (end -4.953 2.223) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start 2.413 0.191) (mid 2.56179 -0.16821) (end 2.921 -0.317) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start -1.27 -2.984) (mid -1.62921 -3.13279) (end -1.778 -3.492) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start -2.413 2.223) (mid -2.56179 2.58221) (end -2.921 2.731) (layer "Edge.Cuts") (width 0.12) )
      (fp_arc (start 4.953 2.223) (mid 4.80421 2.58221) (end 4.445 2.731) (layer "Edge.Cuts") (width 0.12) )
      (pad "1" smd oval (at 8.56996 -7.62 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D0.str})
      (pad "1" smd oval (at -8.56996 -7.62 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D0.str})
      (pad "2" smd oval (at -8.56996 -5.08 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D1.str})
      (pad "2" smd oval (at 8.56996 -5.08 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D1.str})
      (pad "3" smd oval (at -8.56996 -2.54 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D2.str})
      (pad "3" smd oval (at 8.56996 -2.54 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D2.str})
      (pad "4" smd oval (at 8.56996 0 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D3.str})
      (pad "4" smd oval (at -8.56996 0 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D3.str})
      (pad "5" smd oval (at -8.56996 2.54 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D4.str})
      (pad "5" smd oval (at 8.56996 2.54 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D4.str})
      (pad "6" smd oval (at 8.56996 5.08 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D5.str})
      (pad "6" smd oval (at -8.56996 5.08 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D5.str})
      (pad "7" smd oval (at 8.56996 7.62 180) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D6.str})
      (pad "7" smd oval (at -8.56996 7.62 180) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D6.str})
      (pad "8" smd oval (at 8.56996 7.62) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D7.str})
      (pad "8" smd oval (at -8.56996 7.62) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D7.str})
      (pad "9" smd oval (at -8.56996 5.08) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D8.str})
      (pad "9" smd oval (at 8.56996 5.08) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D8.str})
      (pad "10" smd oval (at -8.56996 2.54) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D9.str})
      (pad "10" smd oval (at 8.56996 2.54) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D9.str})
      (pad "11" smd oval (at 8.56996 0) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.D10.str})
      (pad "11" smd oval (at -8.56996 0) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.D10.str})
      (pad "12" smd oval (at -8.56996 -2.54) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p._3V3.str})
      (pad "12" smd oval (at 8.56996 -2.54) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p._3V3.str})
      (pad "13" smd oval (at 8.56996 -5.08) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") GND)
      (pad "13" smd oval (at -8.56996 -5.08) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") GND)
      (pad "14" smd oval (at -8.56996 -7.62) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "B.Cu" "B.Paste" "B.Mask") ${p._5V.str})
      (pad "14" smd oval (at 8.56996 -7.62) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask") ${p._5V.str})
      (pad "17" thru_hole circle (at -1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.DIO.str})
      (pad "18" thru_hole circle (at 1.27 -6.032 270) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.CLK.str})
      (pad "19" thru_hole circle (at 4.445 -0.317 180) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.BATP.str})
      (pad "19" thru_hole circle (at -4.445 -0.317 180) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers *.Cu *.Mask) ${p.BATP.str})
    )
    `
}
   


