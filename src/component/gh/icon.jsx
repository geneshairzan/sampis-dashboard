import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import google from "@img/google.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SettingsIcon from '@mui/icons-material/Settings';

function IconRender(props) {
  return <img src={props.path} style={{ width: 18, height: 18, ...props.sx }} />;
}

const icon = {
  Google: (props) => <IconRender path={google} {...props} />,
  Plus: AddCircleIcon,
  Back: ArrowBackIcon,
  Close: CloseIcon,
  Check: CheckCircleOutlineIcon,
  Share: ShareIcon,
  Cloud: CloudQueueIcon,
  Person: PersonIcon,
  Cart: ShoppingCartIcon,
  Logout: LogoutIcon,
  Menu: MenuIcon,
  Refresh: RefreshIcon,
  Qrcode: QrCodeIcon,
  Qrscan: QrCodeScannerIcon,
  Gear: SettingsIcon
};

export default icon;
