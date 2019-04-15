let masa = ["1.00794", "6.941", "22.98976", "39.98976", "85.4678", "132.9054", "223",
            "", "9.012182", "24.3050", "40.078", "87.62", "137.327", "226",
            "", "", "", "44.95591", "88.90585", "174.9668", "262",
            "", "", "", "47.867", "91.224", "178.49", "261",
            "", "", "", "50.9415", "92.90638", "180.9478", "262",
            "", "", "", "51.9962", "95.96", "183.84", "266",
            "", "", "", "54.93804", "98", "186.207", "264",
            "", "", "", "55.845", "101.07", "190.23", "277",
            "", "", "", "58.93319", "102.9055", "192.217", "268",
            "", "", "", "58.6934", "106.42", "195.084", "271",
            "", "", "", "63.546", "107.8682", "196.9665", "272",
            "", "", "", "65.38", "112.441", "200.59", "285",
            "", "10.811", "26.98153", "69.723", "114.818", "204.3833", "284",
            "", "12.0107", "28.0855", "72.64", "118.710", "207.2", "289",
            "", "14.0067", "30.97696", "74.92160", "121.760", "208.9804", "288",
            "", "15.9994", "32.065", "78.96", "127.60", "210", "292",
            "", "18.998403", "35.453", "79.904", "126.9044", "210", "294",
            "4.002602", "20.1797", "39.948", "83.798", "131.293", "220", "294"]

let ion = ["1312.0", "520.2", "495.8", "418.8.0", "403.0", "373.7", "380.0",
            "", "899.5", "737.7", "589.8", "549.5", "502.9", "509.3",
            "", "", "", "633.1", "600.0", "523.5", "470.0",
            "", "", "", "658.8", "640.1", "658.5", "580.0",
            "", "", "", "650.9", "652.1", "761.0", "",
            "", "", "", "652.9", "684.3", "770.0", "",
            "", "", "", "717.3", "702.0", "760.0", "",
            "", "", "", "762.5", "710.2", "840.0", "",
            "", "", "", "760.4", "719.7", "880.0", "",
            "", "", "", "737.1", "804.4", "870.0", "",
            "", "", "", "745.5", "731.0", "890.1", "",
            "", "", "", "906.4", "867.8", "1007.1", "",
            "", "800.6", "577.5", "578.8", "558.3", "589.4", "",
            "", "1086.5", "786.5", "762.0", "708.6", "715.6", "",
            "", "1402.3", "1011.8", "947.0", "834.0", "703.0", "",
            "", "1313.9", "999.6", "941.0", "869.3", "812.1", "",
            "", "1681.0", "1251.2", "1139.9", "1008.4", "890.0", "",
            "2372.3", "2080.7", "1520.6", "1350.8", "1170.4", "1037.0", ""]

let electro = ["2.20", "0.98", "0.93", "0.82", "0.82", "0.79", "0.70",
                "", "1.57", "1.31", "1.00", "0.95", "0.89", "0.90",
                "", "", "", "1.36", "1.22", "1.27", "",
                "", "", "", "1.54", "1.33", "1.30", "",
                "", "", "", "1.63", "1.60", "1.50", "",
                "", "", "", "1.66", "2.16", "2.36", "",
                "", "", "", "1.55", "1.90", "1.90", "",
                "", "", "", "1.83", "2.20", "2.20", "",
                "", "", "", "1.91", "2.28", "2.20", "",
                "", "", "", "1.88", "2.20", "2.28", "",
                "", "", "", "1.90", "1.93", "2.54", "",
                "", "", "", "1.65", "1.69", "2.00", "",
                "", "2.04", "1.61", "1.81", "1.78", "1.62", "",
                "", "2.55", "1.90", "2.01", "1.96", "2.33", "",
                "", "3.04", "2.19", "2.18", "2.05", "2.02", "",
                "", "3.44", "2.58", "2.55", "2.10", "2.00", "",
                "", "3.98", "3.16", "2.96", "2.66", "2.20", "",
                "", "", "", "3.00", "2.60", "", ""]

let numero = ["1", "3", "11", "19", "37", "55", "87",
              "", "4", "12", "20", "38", "56", "88",
              "", "", "", "21", "39", "71", "103",
              "", "", "", "22", "40", "72", "104",
              "", "", "", "23", "41", "73", "105",
              "", "", "", "24", "42", "74", "106",
              "", "", "", "25", "43", "75", "107",
              "", "", "", "26", "44", "76", "108",
              "", "", "", "27", "45", "77", "109",
              "", "", "", "28", "46", "78", "110",
              "", "", "", "29", "47", "79", "111",
              "", "", "", "30", "48", "80", "112",
              "", "5", "13", "31", "49", "81", "113",
              "", "6", "14", "32", "50", "82", "114",
              "", "7", "15", "33", "51", "83", "115",
              "", "8", "16", "34", "52", "84", "116",
              "", "9", "17", "35", "53", "85", "117",
              "2", "10", "18", "36", "54", "86", "118"]

let simbol = ["H", "Li", "Na", "K", "Rb", "Cs", "Fr",
              "", "Be", "Mg", "Ca", "Sr", "Ba", "Ra",
              "", "", "", "Sc", "Y", "Lu", "Lr",
              "", "", "", "Ti", "Zr", "Hf", "Rf",
              "", "", "", "V", "Nb", "Ta", "Db",
              "", "", "", "Cr", "Mo", "W", "Sg",
              "", "", "", "Mn", "Tc", "Re", "Bh",
              "", "", "", "Fe", "Ru", "Os", "Hs",
              "", "", "", "Co", "Rh", "Ir", "Mt",
              "", "", "", "Ni", "Pd", "Pt", "Ds",
              "", "", "", "Cu", "Ag", "Au", "Rg",
              "", "", "", "Zn", "Cd", "Hg", "Cn",
              "", "B", "Al", "Ga", "In", "Tl", "Nh",
              "", "C", "Si", "Ge", "Sn", "Pb", "Fl",
              "", "N", "P", "As", "Sb", "Bi", "Mc",
              "", "O", "S", "Se", "Te", "Po", "Lv",
              "", "F", "Cl", "Br", "I", "At", "Ts",
              "He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]

let name = ["Hidrógeno", "Litio", "Sodio", "Potasio", "Rubidio", "Cesio", "Francio",
            "",  "Berilio", "Magnesio", "Calcio", "Estroncio", "Bario", "Radio",
            "", "", "", "Escandio", "Itrio", "Lutecio", "Laurencio",
            "", "", "", "Titanio", "Zirconio", "Hafnio", "Rutherfordio",
            "", "", "", "Vanadio", "Niobio", "Tantalio", "Dubnio",
            "", "", "", "Cromo", "Molibdeno", "Wolframio", "Seaborgio",
            "", "", "", "Manganeso", "Tecnecio", "Renio", "Bohrio",
            "", "", "", "Hierro", "Rutenio", "Osmio", "Hassio",
            "", "", "", "Cobalto", "Rodio", "Iridio", "Meitnerio",
            "", "", "", "Níquel", "Paladio", "Platino", "Darmstatio",
            "", "", "", "Cobre", "Plata", "Oro", "Roentgenio",
            "", "", "", "Zinc", "Cadmio", "Mercurio", "Copernicio",
            "", "Boro", "Aluminio", "Galio", "Indio", "Talio", "Nihonio",
            "", "Carbono", "Silicio", "Germanio", "Estaño", "Plomo", "Flerovio",
            "", "Nitrógeno", "Fósforo", "Arsénico", "Antimonio", "Bismuto", "Moscovio",
            "", "Oxígeno", "Azufre", "Selenio", "Telurio", "Polonio", "Livermorio",
            "", "Flúor", "Cloro", "Bromo", "Yodo", "Astato", "Teneso",
            "Helio", "Neón", "Argón", "Kriptón", "Xenón", "Radón", "Oganesón"]

let type = ["svn-nb-nr-ef", "sc1-nb-nr", "sc1-nb-nr-ef", "sc1-nb-nr", "sc1-nb-nr", "sc1-nb-nr", "sc1-nr",
            "sh", "sc2-nb-nr", "sc2-nb-nr", "sc2-nb-nr", "sc2-nb-nr-ef", "sc2-nb-nr", "sc2-nr",
            "sh", "sh-yl", "sh-yl", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr-ef", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr-ef", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr-ef", "sm-nr",
            "sh", "sh", "sh", "sm-nb-nr", "sm-nb-nr", "sm-nb-nr", "sm-nr",
            "sh", "sg-nm-nb-nr", "sy-nm-nb-nr", "sy-nm-nb-nr", "sy-nm-nb-nr", "sy-nm-nb-nr", "sy-nm-nr",
            "sh", "svn-nb-nr-ef", "sg-nm-nb-nr", "sg-nm-nb-nr", "sy-nm-nb-nr-ef", "sy-nm-nb-nr", "sy-nm-nr",
            "sh", "svn-nb-nr", "svn-nb-nr", "sg-nm-nb-nr", "sg-nm-nb-nr", "sy-nm-nb-nr", "sy-nm-nr",
            "sh", "svn-nb-nr-ef", "svn-nb-nr", "svn-nb-nr", "sg-nm-nb-nr", "sg-nm-nb-nr", "sy-nm-nr",
            "sh", "sp-nm-nb-nr", "sp-nm-nb-nr", "sp-nm-nb-nr", "sp-nm-nb-nr", "sp-nm-nb-nr", "sp-nm-nr",
            "sgn-nb-ef", "sgn-nb", "sgn-nb", "sgn-nb", "sgn-nb-ef", "sgn-nb", "sgn",
          ]

var cels = {'sh' : 'subbox-h',
            'sh-yl': 'subbox-h yleft',
            'svn-nb-nr':'subbox-v-nometal nbot nright',
            'svn-nb-nr-ef':'subbox-v-nometal nbot nright elemfoto',
            'sc1-nb-nr': 'subbox-c1 nbot nright',
            'sc1-nr': 'subbox-c1 nright',
            'sc1-nb-nr-ef': 'subbox-c1 nbot nright elemfoto',
            'sc2-nb-nr': 'subbox-c2 nbot nright',
            'sc2-nr': 'subbox-c2 nright',
            "sc2-nb-nr-ef": 'subbox-c2 nbot nright elemfoto',
            'sm-nb-nr': 'subbox-middle nbot nright',
            'sm-nr': 'subbox-middle nright',
            'sm-nb-nr-ef': 'subbox-middle nbot nright elemfoto',
            'sg-nm-nb-nr': 'subbox-g-nometal nbot nright',
            'sy-nm-nb-nr': 'subbox-y-nometal nbot nright',
            'sy-nm-nr': 'subbox-y-nometal nright',
            'sp-nm-nb-nr': 'subbox-p-nometal nbot nright',
            'sp-nm-nr': 'subbox-p-nometal nright',
            'sgn': 'subbox-gn',
            'sgn-nb': 'subbox-gn nbot',
            'sgn-nb-ef': 'subbox-gn nbot elemfoto'
          }
