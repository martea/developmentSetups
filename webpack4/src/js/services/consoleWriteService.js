class ConsoleWriteService {
    constructor() {

    }

    clear = () => console.clear();
    write = (string) => {
        console.log(string);

    }
}

export default ConsoleWriteService;