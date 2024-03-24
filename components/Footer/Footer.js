// Footer.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './FooterStyles';

const Footer = ({ filterTasks, tasks, setTasksToDisplay, setFilterBarPosition, filterBarPosition }) => {
    return (
        <View style={styles.footer}>
            {/* Bouton pour afficher toutes les tâches */}
            <TouchableOpacity
                style={styles.filter}
                onPress={() => {
                    setTasksToDisplay(filterTasks("all"));
                    setFilterBarPosition(0);
                }}
            >
                {/* Texte indiquant le filtre "Tout" et le nombre de tâches correspondantes */}
                <Text>{"Tout" + " (" + tasks.length + ")"}</Text>
            </TouchableOpacity>
            {/* Bouton pour afficher les tâches en cours */}
            <TouchableOpacity
                style={styles.filter}
                onPress={() => {
                    setTasksToDisplay(filterTasks("in progress"));
                    setFilterBarPosition(1);
                }}
            >
                {/* Texte indiquant le filtre "En cours" et le nombre de tâches correspondantes */}
                <Text>{"En cours" + " (" + tasks.filter((task) => task.state === "in progress").length + ")"}</Text>
            </TouchableOpacity>
            {/* Bouton pour afficher les tâches à faire */}
            <TouchableOpacity
                style={styles.filter}
                onPress={() => {
                    setTasksToDisplay(filterTasks("todo"));
                    setFilterBarPosition(2);
                }}
            >
                {/* Texte indiquant le filtre "A faire" et le nombre de tâches correspondantes */}
                <Text>{"A faire" + " (" + tasks.filter((task) => task.state === "todo").length + ")"}</Text>
            </TouchableOpacity>
            {/* Bouton pour afficher les tâches faites */}
            <TouchableOpacity
                style={styles.filter}
                onPress={() => {
                    setTasksToDisplay(filterTasks("done"));
                    setFilterBarPosition(3);
                }}
            >
                {/* Texte indiquant le filtre "Fait" et le nombre de tâches correspondantes */}
                <Text>{"Fait" + " (" + tasks.filter((task) => task.state === "done").length + ")"}</Text>
            </TouchableOpacity>
            {/* Barre de filtre qui se déplace en fonction de la position */}
            <View
                style={[styles.filterBar, { left: filterBarPosition * 25 + "%" }]}
            />
        </View>
    );
};

export default Footer;
