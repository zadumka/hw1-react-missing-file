import PropTypes from 'prop-types';
import { Container, Label, List, Percent, Stat, Title } from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

const Statictics = ({stats, title}) => {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            <List>
                {stats.map((item) => (
                    <Stat
                        key={item.id}
                        style={{ backgroundColor: getRandomHexColor() }}
                    >
                        <Label>{item.label}</Label>
                        <Percent>{item.percentage}%</Percent>
                    </Stat>
                ))}
            </List>
            </Container>
    );
};

Statictics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
    title: PropTypes.string,
}

export default Statictics;