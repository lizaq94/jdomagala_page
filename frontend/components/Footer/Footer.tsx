import classes from '@/styles/components/Footer.module.scss';
const Footer = () => {
	return (
		<footer className={classes.wrapper}>
			<div className={classes.address}></div>
			<nav className={classes.buttonsWrapper}></nav>
		</footer>
	);
};

export default Footer;
