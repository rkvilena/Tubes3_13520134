// Format tanggal yang diterima :
// 1) dd mm yyyy (int-str-int)
// 2) dd/mm/yyyy (int-int-int)
// 3) dd-mm-yyyy (int-int-int)
function get_tanggal(strinput){
    let regex_tanggal = /((\d{2})\s([Jj]anuari|[Ff]ebruari|[Mm]aret|[Aa]pril|[Mm]ei|[Jj]uni|[Jj]uli|[Aa]gustus|[Ss]eptember|[Oo]ktober|[Nn]ovember|[Dd]esember)\s(\d{4})|((\d{2})\/(\d{2})\/\d{4})|((\d{2})\-(\d{2})\-\d{4}))/;
    let tanggal = strinput.match(regex_tanggal);
    if (tanggal){ // string match
        tanggal = convert_sql_form(tanggal[0]);
    } 
    return tanggal; // Klo di input ada tanggal, return tanggal sesuai format sql. Klo ga match, return null
}

function convert_sql_form(tanggal){
    if (tanggal.match(/(\d{2})\s([Jj]anuari|[Ff]ebruari|[Mm]aret|[Aa]pril|[Mm]ei|[Jj]uni|[Jj]uli|[Aa]gustus|[Ss]eptember|[Oo]ktober|[Nn]ovember|[Dd]esember)\s(\d{4})/)){
        tanggal = tanggal.split(' ');

        let tanggal_bulan = tanggal[1];
        if(tanggal_bulan.match(/[Jj]anuari/)){
            tanggal_bulan = '01';
        } else if(tanggal_bulan.match(/[Ff]ebruari/)){
            tanggal_bulan = '02';
        } else if(tanggal_bulan.match(/[Mm]aret/)){
            tanggal_bulan = '03';
        } else if(tanggal_bulan.match(/[Aa]pril/)){
            tanggal_bulan = '04';
        } else if(tanggal_bulan.match(/[Mm]ei/)){
            tanggal_bulan = '05';
        } else if(tanggal_bulan.match(/[Jj]uni/)){
            tanggal_bulan = '06';
        } else if(tanggal_bulan.match(/[Jj]uli/)){
            tanggal_bulan = '07';
        } else if(tanggal_bulan.match(/[Aa]gustus/)){
            tanggal_bulan = '08';
        } else if(tanggal_bulan.match(/[Ss]eptember/)){
            tanggal_bulan = '09';
        } else if(tanggal_bulan.match(/[Oo]ktober/)){
            tanggal_bulan = '10';
        } else if(tanggal_bulan.match(/[Nn]ovember/)){
            tanggal_bulan = '11';
        } else if(tanggal_bulan.match(/[Dd]esember/)){
            tanggal_bulan = '12';
        } else {
            tanggal_bulan = '00';
        }

        tanggal = tanggal[2] + '-' + tanggal_bulan + '-' + tanggal[0];
    } else if(tanggal.match(/(\d{2})\/(\d{2})\/\d{4}/)){
        tanggal = tanggal.split('/');
        
        tanggal = tanggal[2] + '-' + tanggal[1] + '-' + tanggal[0];
    } else if(tanggal.match(/(\d{2})\-(\d{2})\-\d{4}/)){
        tanggal = tanggal.split('-');
        
        tanggal = tanggal[2] + '-' + tanggal[1] + '-' + tanggal[0];
    } else {
        tanggal = '0000-00-00';
    }
    return tanggal;
}

// Penyakit didetect klo inputannya :
// Asumsi nama penyakit ga ada angka
// date <nama penyakit>
// <nama penyakit> 
function get_penyakit(strinput){
    let regex_penyakit = /((?<=((\d{2})\s([Jj]anuari|[Ff]ebruari|[Mm]aret|[Aa]pril|[Mm]ei|[Jj]uni|[Jj]uli|[Aa]gustus|[Ss]eptember|[Oo]ktober|[Nn]ovember|[Dd]esember)\s(\d{4})|((\d{2})\/(\d{2})\/\d{4})|((\d{2})\-(\d{2})\-\d{4}))\s)(.*)|(^(?!.*\d).*$))/;
    let penyakit = strinput.match(regex_penyakit);
    if (penyakit){ // string match
        penyakit = penyakit[0];
    }
    return penyakit; // Klo di input ada penyakit, return penyakit. Klo ga ada, return null
}


/* Testing
input = '13 April 2022 HIV AIDS';
input1 = '13/04/2022';
input2 = '13-04-2022';

input3 = 'Penyakit imba'

console.log(get_tanggal(input));
console.log(get_penyakit(input));
console.log(get_tanggal(input1));
console.log(get_tanggal(input2));
console.log(get_penyakit(input3));
*/
