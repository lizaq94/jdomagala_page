interface IProps {
	isOpen: boolean;
}
const HamburgerButton = ({ isOpen }: IProps) => {
	return <div className={styles.wrapper}></div>;
};

export default HamburgerButton;
