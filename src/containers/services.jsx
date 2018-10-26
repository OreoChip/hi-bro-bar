import React, { Component } from 'react';
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

// @material-ui/icons

// core components
import Slider from 'react-slick';
import image from 'assets/barber.jpg'
import image1 from 'assets/image2.jpg'
import image2 from 'assets/image3.jpg'
import { container } from 'design-system/assets/jss/material-kit-react.jsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

let id = 0;
function createData(serviceName, price) {
    id += 1;
    return { id, serviceName, price };
}

const rows = [
    createData('Eye Brow Threading', '$10'),
    createData('Upper Lip', '$6'),
    createData('Lower Lip', '$2'),
    createData('Forehead', '$6'),
    createData('Chin', '$8'),
];

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        maxWidth: 600
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    servicesContainer: {
        marginTop: "100px"
    },
    tableCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    cardCont: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
    },
    card: {
        width: "300px",
        margin: "20px",
        marginTop: "50px",
    },
    merge: {
        display: "flex",
        flexDirection: "column"
    },
    cardInside: {
        width: "300px",
        margin: "20px",
        marginTop: "10px",
        padding: "20px"
    },
    media: {
        height: 0,
        paddingTop: '50%'
    },
});

class Services extends Component {
    render() {
        console.log(this.props)
        const { classes } = this.props;
        return (
            <div className={classes.servicesContainer}>
                <div className={classes.tableCont}>
                    <Typography variant="h2"> Our Services</Typography>
                    <div className={classes.cardCont}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require('assets/eyeBrow.jpeg')}
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography variant="h6">
                                    Waxing
                                </Typography>
                                <Typography variant="body1">
                                    Under Arm $10 <br />
                                    Arm & Under Arm $35<br />
                                    Half Arm $20<br />
                                    Half Leg $30<br />
                                    Full Leg $40<br />
                                    Full Leg & Arm $75<br />
                                    Full Brazilian $45<br />
                                    Bikini Line $25<br />
                                    Full Body $160
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require('assets/eyeBrow.jpeg')}
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography variant="h6">
                                    Threading
                                </Typography>
                                <Typography variant="body1">
                                    Under Arm $10 <br />
                                    Arm & Under Arm $35<br />
                                    Half Arm $20<br />
                                    Half Leg $30<br />
                                    Full Leg $40<br />
                                    Full Leg & Arm $75<br />
                                    Full Brazilian $45<br />
                                    Bikini Line $25<br />
                                    Full Body $160
                                </Typography>
                            </CardContent>
                        </Card>
                        <div className={classes.merge}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={require('assets/eyeBrow.jpeg')}
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography variant="h6">
                                    Facials
                                </Typography>
                                <Typography variant="body1">
                                    Under Arm $10 <br />
                                    Arm & Under Arm $35<br />
                                    Half Arm $20<br />
                                    Half Leg $30<br />
                                    Full Leg $40<br />
                                    Full Leg & Arm $75<br />
                                    Full Brazilian $45<br />
                                    Bikini Line $25<br />
                                    Full Body $160
                                </Typography>
                            </CardContent>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Services);
