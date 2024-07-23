import { Scene, GameObjects } from 'phaser';
import { OscillatorType, SoundHelper, SoundInfo } from './SoundHelper';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    song1: GameObjects.Text;
    song2: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo');

        this.title = this.add.text(this.scale.width * .5, this.logo.getBounds().bottom, 'My Piano Tool', {
            fontFamily: 'Arial Black', fontSize: 42 * 1.5, color: '#0052ff',
            stroke: '#ffffff', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setRotation(-.1);

        this.song1 = this.add.text(512, 460, 'Song 1', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        this.song2 = this.add.text(512, 540, 'Song 2', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        this.song1.on('pointerdown', () => {

            this.playSong1();

        });

        this.song2.on('pointerdown', () => {

            this.playSong2();

        });

    }

    async playSong1() {
        const soundHelper = new SoundHelper();
        soundHelper.tempo = 72;

        soundHelper.playChord(soundHelper.createChord(['C2', 'C3', 'G3', 'C4', 'E4'], 1.0));
        soundHelper.playChord(soundHelper.createChord(['C3'], .5, 500));

        soundHelper.playChord(soundHelper.createChord(['C2', 'C3', 'G3', 'C4', 'E4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['C3'], .5, 1500));

        soundHelper.playChord(soundHelper.createChord(['G1', 'G2', 'G3', 'B3', 'D4'], 1.0, 2000));
        soundHelper.playChord(soundHelper.createChord(['G2'], .5, 2500));

        soundHelper.playChord(soundHelper.createChord(['G1', 'G2', 'G3', 'B3', 'D4'], 1.0, 3000));
        soundHelper.playChord(soundHelper.createChord(['G2'], .5, 3500));

        soundHelper.playChord(soundHelper.createChord(['A1', 'A2', 'A3', 'C3', 'E4'], 1.0, 4000));
        soundHelper.playChord(soundHelper.createChord(['A2'], .5, 4500));

        soundHelper.playChord(soundHelper.createChord(['A1', 'A2', 'A3', 'C3', 'E4'], 1.0, 5000));
        soundHelper.playChord(soundHelper.createChord(['A2'], .5, 5500));

        soundHelper.playChord(soundHelper.createChord(['F1', 'F2', 'G3', 'C3', 'E4'], 1.0, 6000));
        soundHelper.playChord(soundHelper.createChord(['F2'], .5, 6500));

        soundHelper.playChord(soundHelper.createChord(['F1', 'F2', 'A3', 'C3', 'D4'], 1.0, 7000));
        soundHelper.playChord(soundHelper.createChord(['F2'], .5, 7500));
    }


    async playSong2() {
        const soundHelper = new SoundHelper();
        soundHelper.tempo = 66;

        soundHelper.playChord(soundHelper.createChord(['C2', 'C3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['C4', 'Eb4', 'G4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['C4', 'Eb4', 'G4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['D2', 'D3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['Bb3', 'D4', 'G4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['Bb3', 'D4', 'G4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['Eb2', 'Eb3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['Bb3', 'Eb4', 'G4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['Bb3', 'Eb4', 'G4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['Bb2', 'Bb3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['Bb3', 'Eb4', 'F4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['Bb3', 'D4', 'F4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['C2', 'C3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['C4', 'F4', 'G#4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['C4', 'F4', 'G#4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['C#2', 'C#3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['C#4', 'F4', 'G#4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['C#4', 'F4', 'G#4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['D2', 'D3'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['D4', 'F4', 'G#4'], 1.0, 1000));
        soundHelper.playChord(soundHelper.createChord(['D4', 'F4', 'G#4'], 1.0, 2000));

        await soundHelper.delay(4000);
        soundHelper.playChord(soundHelper.createChord(['G1', 'G2'], 4.0));
        soundHelper.playChord(soundHelper.createChord(['F3', 'B3', 'D#4'], 1.0));
        soundHelper.playChord(soundHelper.createChord(['F3'], .25, 1000));
        soundHelper.playChord(soundHelper.createChord(['B3'], .25, 1250));
        soundHelper.playChord(soundHelper.createChord(['D#4'], .5, 1500));
        soundHelper.playChord(soundHelper.createChord(['F3', 'B3', 'D4'], 2.0, 2000));
    }
}
