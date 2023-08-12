import { HamburgerButtonContext } from '../../contexts/HamburgerButtonStore';
import { MenuItemContext } from '../../contexts/MenuIconStore';
import {Container, MenuItem, ButtonIcon, MenuContainer, MainMenuContainer, StyledSpan} from './styles';
import { useContext } from 'react';
import HomeIcon from '../../assets/home.png';
import HomeDark from '../../assets/homedark.png';
import ShortIcon from '../../assets/shorts.png';
import Shortdark from '../../assets/shortsdark.png';
import SubIcon from '../../assets/subinscriptions.png';
import SubIconDark from '../../assets/subscribedark.png';
import LibIcon from '../../assets/biblioteca.png';
import LibDark from '../../assets/librarydark.png';
import HistIcon from '../../assets/history.png';
import HistIconDark from '../../assets/historydark.png';
import YourVideos from '../../assets/seusvideos.png';
import YourVideosDark from '../../assets/seusvideosblack.png';
import ClockIcon from '../../assets/clock.png';
import ClockIconDark from '../../assets/clokdark.png';
import WatchIcon from '../../assets/watch.png';
import FlameIcon from "../../assets/flame.png";
import FlameIconDark from '../../assets/flamedark.png';
import ShopIcon from '../../assets/shop.png';
import ShopIconDark from '../../assets/shopdark.png';
import MusicIcon from '../../assets/musicicon.png';
import MusicIconDark from '../../assets/musicicondark.png';
import MovieIcon from '../../assets/movieicon.png';
import MovieIconDark from '../../assets/movieicondark.png';
import LiveIcon from '../../assets/live.png';
import LiveIconDark from '../../assets/livedark.png';
import GameIcon from '../../assets/gamesicon.png';
import GameIconDark from '../../assets/gamesicondark.png';
import NewsIcon from '../../assets/newsicon.png';
import NewsIconDark from '../../assets/newsicondark.png';
import TrophieIcon from '../../assets/trophieicon.png';
import TrophieIconDak from '../../assets/trophieicondark.png';
import LightIcon from '../../assets/lighticon.png';
import LightIconDark from '../../assets/lighticondark.png';
import AddNewIcon from '../../assets/addnewicon.png';
import YTPremiumIcon from '../../assets/youtubepremiumicon.png';
import YTMusicIcon from '../../assets/ytubemusicicon.png';
import YTKidsIcon from '../../assets/youtbekidsicon.png';
import SettingsIcon from '../../assets/settingsicon.png';
import SettingsIconDark from '../../assets/settingsicondark.png';
import FlagIcon from '../../assets/flagicon.png';
import FlagIconDark from '../../assets/flagicondark.png';
import QuestionIcon from '../../assets/question icon.png';
import QuestionIconDark from '../../assets/questionicondark.png';
import WarningIcon from '../../assets/warningicon.png';
import WarningIconDark from '../../assets/warningicondark.png';

function Menu (){
    const {openMenu} = useContext(HamburgerButtonContext)
    const {menuIcon, setMenuIcon} = useContext(MenuItemContext)
    

    return(
        <Container openMenu = {openMenu}>
            <MainMenuContainer openMenu ={openMenu}>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Home')} active={menuIcon === 'Home'}>
                    <ButtonIcon  alt= "" src= {menuIcon === 'Home' ? HomeDark : HomeIcon} />
                        <span>Início</span>  
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Shorts')} active={menuIcon === 'Shorts'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Shorts' ? Shortdark : ShortIcon} />
                        <span>Shorts</span>  
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Subscriptions')} active={menuIcon === 'Subscriptions'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Subscriptions' ? SubIconDark : SubIcon} />
                        <span>Inscrições</span>  
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Library')} active={menuIcon === 'Library'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Library' ? LibDark : LibIcon} />
                        <span>Biblioteca</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('History')} active={menuIcon === 'History'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'History' ? HistIconDark : HistIcon} />
                        <span>Histórico</span>
                </MenuItem>      
            </MainMenuContainer>
            <MenuContainer openMenu ={openMenu}>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Your Videos')} active={menuIcon === 'Your Videos'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Your Videos' ? YourVideosDark : YourVideos} />
                        <span>Seus Vídeos</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Playlist')} active={menuIcon === 'Playlist'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Playlist' ? ClockIcon : ClockIconDark} />
                        <span>Assistir mais tarde</span>
                </MenuItem>
            </MenuContainer>
            <MenuContainer openMenu ={openMenu}>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Wacth')} active={menuIcon === 'Wacth'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Wacth' ? WatchIcon : WatchIcon} />
                        <span>Youtube Mix</span>
                </MenuItem>
            </MenuContainer>
            <MenuContainer openMenu ={openMenu}>
                <StyledSpan>Explorar</StyledSpan>        
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Trending')} active={menuIcon === 'Trending'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Trending' ? FlameIcon : FlameIconDark} />
                        <span>Em Alta</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Shop')} active={menuIcon === 'Shop'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Shop' ? ShopIconDark : ShopIcon} />
                        <span>Shopping</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Music')} active={menuIcon === 'Music'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Music' ? MusicIconDark : MusicIcon} />
                        <span>Música</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Movie')} active={menuIcon === 'Movie'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Movie' ? MovieIconDark: MovieIcon} />
                        <span>Filmes</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Live')} active={menuIcon === 'Live'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Live' ? LiveIconDark : LiveIcon} />
                        <span>Ao vivo</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Game')} active={menuIcon === 'Game'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Game' ? GameIconDark : GameIcon} />
                        <span>Games</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('News')} active={menuIcon === 'News'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'News' ? NewsIconDark : NewsIcon} />
                        <span>Notícias</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Sports')} active={menuIcon === 'Sports'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Sports' ? TrophieIconDak : TrophieIcon} />
                        <span>Esportes</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Learn')} active={menuIcon === 'Learn'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Learn' ? LightIconDark : LightIcon} />
                        <span>Aprender</span>
                </MenuItem>
            </MenuContainer>
            <MenuContainer openMenu ={openMenu}>
            <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Feed')} active={menuIcon === 'Feed'}>
                    <ButtonIcon  alt="" src= {AddNewIcon} />
                        <span>Procurar canais</span>
                </MenuItem>
            </MenuContainer>
            <MenuContainer openMenu ={openMenu}>
                <StyledSpan>Mais do YouTube</StyledSpan>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Premium')} active={menuIcon === 'Premium'}>
                    <ButtonIcon  alt="" src= {YTPremiumIcon} />
                        <span>YouTube Premium</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Music Premium')} active={menuIcon === 'Music Premium'}>
                    <ButtonIcon  alt="" src= {YTMusicIcon} />
                        <span>YouTube Music</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Kids')} active={menuIcon === 'Kids'}>
                    <ButtonIcon  alt="" src= {YTKidsIcon} />
                        <span>YouTube Kids</span>
                </MenuItem>
            </MenuContainer>
            <MenuContainer openMenu ={openMenu}>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Settings')} active={menuIcon === 'Settings'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Settings' ? SettingsIconDark : SettingsIcon} />
                        <span>Configurações</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Flag')} active={menuIcon === 'Flag'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Flag' ? FlagIconDark : FlagIcon} />
                        <span>Histórico de denúncias</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Question')} active={menuIcon === 'Question'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Question' ? QuestionIconDark : QuestionIcon} />
                        <span>Ajuda</span>
                </MenuItem>
                <MenuItem openMenu ={openMenu} onClick={() => setMenuIcon('Warning')} active={menuIcon === 'Warning'}>
                    <ButtonIcon  alt="" src= {menuIcon === 'Warning' ? WarningIconDark : WarningIcon} />
                        <span>Eviar feedback</span>
                </MenuItem>
            </MenuContainer>                        
        </Container>    
    )
}
export default Menu;