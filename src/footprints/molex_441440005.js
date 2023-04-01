module.exports = {
  params: {
    TX: {type: 'net', value: 'TX'},
    RX: {type: 'net', value: 'RX'},
    POWER: {type: 'net', value: 'POWER'}
  },
  body: p => {
    const body = `
    (module Molex-441440005-MFG (layer F.Cu) (tedit 5F174929)
    ${p.at}
    (fp_line (start -6.7300000000 8.5700000000) (end -6.7300000000 -8.5700000000) (layer F.Fab) (width 0.15))
    (fp_line (start -6.7300000000 -8.5700000000) (end 6.7300000000 -8.5700000000) (layer F.Fab) (width 0.15))
    (fp_line (start 6.7300000000 -8.5700000000) (end 6.7300000000 8.5700000000) (layer F.Fab) (width 0.15))
    (fp_line (start 6.7300000000 8.5700000000) (end -6.7300000000 8.5700000000) (layer F.Fab) (width 0.15))
    (fp_line (start 6.7550000000 -10.4299980000) (end 6.7550000000 -10.4299980000) (layer F.CrtYd) (width 0.15))
    (fp_line (start 6.7550000000 -10.4299980000) (end -6.7550000000 -10.4299980000) (layer F.CrtYd) (width 0.15))
    (fp_line (start -6.7550000000 -10.4299980000) (end -6.7550000000 8.5950000000) (layer F.CrtYd) (width 0.15))
    (fp_line (start -6.7550000000 8.5950000000) (end 6.7550000000 8.5950000000) (layer F.CrtYd) (width 0.15))
    (fp_line (start 6.7550000000 8.5950000000) (end 6.7550000000 -10.4299980000) (layer F.CrtYd) (width 0.15))
    (fp_line (start -6.7300000000 -8.5700000000) (end -3.8700000000 -8.5700000000) (layer F.SilkS) (width 0.15))
    (fp_line (start 3.8700000000 -8.5700000000) (end 6.7300000000 -8.5700000000) (layer F.SilkS) (width 0.15))
    (fp_line (start 6.7300000000 8.5700000000) (end 6.7300000000 5.6400000000) (layer F.SilkS) (width 0.15))
    (fp_line (start 6.7300000000 -0.3200000000) (end 6.7300000000 -8.5700000000) (layer F.SilkS) (width 0.15))
    (fp_line (start -6.7300000000 8.5700000000) (end 6.7300000000 8.5700000000) (layer F.SilkS) (width 0.15))
    (fp_line (start -6.7300000000 8.5700000000) (end -6.7300000000 5.6400000000) (layer F.SilkS) (width 0.15))
    (fp_line (start -6.7300000000 -0.3200000000) (end -6.7300000000 -8.5700000000) (layer F.SilkS) (width 0.15))
    (fp_circle (center -3.1550000000 -11.0049990000) (end -3.0300000000 -11.0049990000) (layer F.SilkS) (width 0.25))
    (pad 7 smd rect (at -5.3300000000 2.6600000000 )(size 2.5400000000 5.2100000000)(layers F.Mask F.Paste F.Cu) GND)
    (pad 8 smd rect (at 5.3300000000 2.6600000000 )(size 2.5400000000 5.2100000000)(layers F.Mask F.Paste F.Cu) GND)
    (pad 1 smd rect (at -3.1750000000 -9.1349990000 )(size 0.6400000000 2.5400000000)(layers F.Mask F.Paste F.Cu) ${p.POWER.str})
    (pad 2 smd rect (at -1.9050000000 -9.1349990000 )(size 0.6400000000 2.5400000000)(layers F.Mask F.Paste F.Cu) ${p.TX.str})
    (pad 3 smd rect (at -0.6350000000 -9.1349990000 )(size 0.6400000000 2.5400000000)(layers F.Mask F.Paste F.Cu) ${p.TX.str})
    (pad 4 smd rect (at 0.6350000000 -9.1349990000 )(size 0.6400000000 2.5400000000)(layers F.Mask F.Paste F.Cu) ${p.RX.str})
    (pad 5 smd rect (at 1.9050000000 -9.1349990000 )(size 0.6400000000 2.5400000000)(layers F.Mask F.Paste F.Cu) ${p.RX.str})
    (pad 6 smd rect (at 3.1750000000 -9.1349990000 )(size 0.6400000000 2.5400000000)(layers F.Mask F.Paste F.Cu) ${p.POWER.str})
    )
    `
    return body
  }
}
