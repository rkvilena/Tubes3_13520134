function inputsanitation(input){
    return !(/([^AGCT])/.test(input));
}

export { inputsanitation };