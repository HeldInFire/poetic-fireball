import styles from './css/homepage.module.css'
import NextLink from "next/link"
import { sortedPoems } from './sorted';
import PoemItem from './PoemItem';
import { Heading, HStack } from '@chakra-ui/react';


export default function OldHome() {
    return (<>

        <h2 className={`${styles.logo} unselectable`}>~Leswell</h2>

        <Heading>Verseim</Heading>
        <HStack wrap="wrap" my="70px" justify="center" align="center"
            flex="1 1 auto" overflow="auto"
        >
            {sortedPoems.map(
                (poem) =>
                    <PoemItem poem={poem} />
            )}
        </HStack>
    </>);
} 