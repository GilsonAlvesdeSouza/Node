const os = require('os');

setInterval(() => {

    const {arch, platform, totalmem, freemem} = os
    const parseMem = (value) => {
        const toFixed = 1024;
        return parseInt((value / toFixed) / toFixed);
    }

    const parseMemUsage = (fRam, tRam) => {
        return 100 - Math.floor(
            (parseMem(freemem()) / parseMem(totalmem())) * 100
        );
    }

    const formatResult = (value, text = 'MB') => {
        return `${value} ${text}`;
    }

    const status = {
        OS: platform(),
        Arch: arch(),
        TotalRam: formatResult(parseMem(totalmem())),
        FreeRam: formatResult(parseMem(freemem())),
        Usage: formatResult(parseMemUsage(parseMem(freemem()) / parseMem(totalmem())), '%')
    }
    console.clear();
    console.table(status);
    exports.status = status;
}, 500)
