let text = [
    "Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white), or in color, and in two or three dimensions and sound. The term can refer to a television set, a television show, or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports.",
    "Television became available in crude experimental forms in the late 1920s, but it would still be several years before the new technology would be marketed to consumers. After World War II, an improved form of black-and-white TV broadcasting became popular in the United States and Britain, and television sets became commonplace in homes, businesses, and institutions.",
    "During the 1950s, television was the primary medium for influencing public opinion. In the mid-1960s, color broadcasting was introduced in the US and most other developed countries. The availability of multiple types of archival storage media such as Betamax and VHS tapes, high-capacity hard disk drives, DVDs, flash drives, high-definition Blu-ray Discs, and cloud digital video recorders has enabled viewers to watch pre-recorded material—such as movies—at home on their own time schedule.",
    "For many reasons, especially the convenience of remote retrieval, the storage of television and video programming now occurs on the cloud. At the end of the first decade of the 2000s, digital television transmissions greatly increased in popularity. Another development was the move from standard-definition television (SDTV) (576i, with 576 interlaced lines of resolution and 480i) to high-definition television (HDTV), which provides a resolution that is substantially higher.",
    "HDTV may be transmitted in various formats: 1080p, 1080i and 720p. Since 2010, with the invention of smart television, Internet television has increased the availability of television programs and movies via the Internet through streaming video services such as Netflix, Amazon Video, iPlayer and Hulu.",
    "In 2013, 79% of the world's households owned a television set.",
    "The replacement of early bulky, high-voltage cathode ray tube (CRT) screen displays with compact, energy-efficient, flat-panel alternative technologies such as LCDs (both fluorescent-backlit and LED), OLED displays, and plasma displays was a hardware revolution that began with computer monitors in the late 1990s."
]

let avsnittLength = process.argv.length >= 2 ? process.argv[2] : text.length;

for (let i = 0; i < avsnittLength; i++) {
    console.log(text[i]);
}


