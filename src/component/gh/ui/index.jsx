import { Stack, Button, IconButton, Grid } from "@mui/material";
import Row from "./row";
import Col from "./col";
import Text from "./typography";
import Loader from "./apploader";
import Modal from "./modal";
import Divider from "./divider";
import Accordion from "./accordion";

import DTSearch from "./datatables/search";
import DTFilter from "./datatables/filter";
import { search, order } from "./datatables/helper";

const UI = {
  Grid,
  Divider,
  Stack,
  Row,
  Col,
  Text,
  Button,
  IconButton,
  Loader,
  Modal,
  Accordion,
  Datatables: {
    DTSearch,
    DTFilter,
    search,
    order,
  },
};

export default UI;
