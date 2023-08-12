import {
    ButtonContainer,
    ButtonIcon,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    CustomButtonContainer,
    ContainerHeader
} from './styles';
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import { useContext } from 'react';
import { HamburgerButtonContext } from '../../contexts/HamburgerButtonStore';


function Header (){
    const {openMenu,setOpenMenu} = useContext (HamburgerButtonContext)
    return(
        <ContainerHeader>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img 
                    style={{cursor: 'pointer', width: '90px', padding: '10px 10px' }}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>
                <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput placeholder="Pesquisar" />
                    </SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon alt="" src={SearchIcon} />
                    </SearchButton>
                    <CustomButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon  alt="" src={MicIcon} />
                    </CustomButtonContainer>
                </SearchContainer>

                <HeaderButtons>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={VideoIcon} />
                    </ButtonContainer>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContainer>
                    <ButtonContainer margin='0 0 0 10px'>
                        RN
                    </ButtonContainer>
                </HeaderButtons>

        </ContainerHeader>
    )
}
export default Header;