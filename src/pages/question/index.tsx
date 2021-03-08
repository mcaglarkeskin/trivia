import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, Pressable, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';

import LottieView from 'lottie-react-native';
import axios from 'axios';

import style from './style';

const QuestionPage = ({ navigation, route }): JSX.Element => {

	const { difficulty } = route.params;

	interface Question {
		category: string,
		type: string,
		difficulty: 'easy' | 'medium' | 'hard',
		correct_answer: string,
		question: string,
		incorrect_answers: Array<string>
	}

	const [questions, setQuestions] = useState<Array<Question>>();
	const [score, setScore] = useState<number>(0);
	const [currentScore, setCurrentScore] = useState<number>(0);
	const [prepare, setPrepare] = useState<boolean>(true);
	const [answerReady, setAnswerReady] = useState<boolean>(false);
	const [visibleAnswer, setVisibleAnswer] = useState<boolean>(false);
	const [countdown, setCountdown] = useState(14);
	const [answers, setAnswers] = useState<Array<string>>([])

	const lottieRef = useRef();

	var questionCount = 0;
	var intervalId = null;

	useEffect(() => {
		getQuestions();
	}, [])

	//for timing
	useEffect(() => {
		if (countdown === 0) {
			setCountdown(null)
			navigation.navigate('WrongAnswer', { score: score })
		}
		if (!countdown) return;
		intervalId = setInterval(() => {
			setCountdown(countdown - 1);
		}, 1000);
		return () => {
			clearInterval(intervalId)
		};
	}, [countdown]);

	const getQuestions = (): void => {
		setPrepare(true)
		axios.get<Array<Question>>('https://opentdb.com/api.php?amount=10&category=9&type=multiple&difficulty=' + difficulty).then((res) => {
			setQuestions(res.data.results)
		}).then(() => {
			setPrepare(false)
		})
	}

	const nextQuestion = () => {
		questionCount = questionCount + 1;
		setCountdown(14)
		setVisibleAnswer(false)
		lottieRef.current.play()
		prepareAnswers(questions[questionCount].correct_answer, questions[questionCount].incorrect_answers)
		setAnswerReady(true)
	}

	const prepareAnswers = (correct, incorrect): void => {
		var array = incorrect
		array.push(correct)
		array = shuffleArray(array)
		setAnswers(array);
	}

	const shuffleArray = (array: Array<string>): Array<string> => {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	const renderItem = ({ item }) => (
		<Pressable
			style={style.readyButton}
			onPress={() => {
				if (item == questions[questionCount].correct_answer) {
					if (difficulty == 'hard') {
						let scr = countdown * 7;
						setCurrentScore(scr);
						setScore(s => s + scr)
					} else if (difficulty == 'medium') {
						let scr = countdown * 5;
						setCurrentScore(scr);
						setScore(s => s + scr)
					} else {
						let scr = countdown * 3;
						setCurrentScore(scr);
						setScore(s => s + scr)
					}
					lottieRef.current.reset()
					setVisibleAnswer(true);
					clearInterval(intervalId);
				} else {
					setTimeout(() => {
						navigation.navigate('WrongAnswer', { score: score })
					}, 500)

				}
			}}>
			<Text style={style.readyText}>{item}</Text>
		</Pressable>
	);

	return (
		<ImageBackground source={require('../../shared/assets/background.jpg')} style={style.container}>
			{
				//getting questions
				prepare
					?
					<ActivityIndicator size={'large'} color={'#380140'} />
					:
					<View style={{ flex: 1, width: '100%' }}>
						<View style={style.top}>
							<Text style={style.topItem}>Question: {questionCount + 1} / 10</Text>
							<Text style={style.topItem}>{score} Points</Text>
							<LottieView ref={ref => lottieRef.current = ref} resizeMode='center' style={{ width: 50, height: 50 }} source={require('../../shared/assets/countdown.json')} />
						</View>
						{
							visibleAnswer
								?
								<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
									<LottieView style={{ width: 300, height: 300 }} source={require('../../shared/assets/check.json')} autoPlay loop />
									<Text style={style.correct}>CORRECT!</Text>
									<Text style={style.desc}>You have earned {currentScore} points</Text>
									<Text style={style.desc}>Total: {score} points</Text>
									<Pressable onPress={() => nextQuestion()} style={style.readyButton}>
										<Text style={style.readyText}>Next Question</Text>
									</Pressable>
								</View>
								:
								answerReady
									?
									<View style={style.questionContainer}>
										<View style={style.question}>
											<Text style={style.questionText}>{questions[questionCount].question}</Text>
										</View>
										<View style={style.answers}>
											<FlatList
												data={answers}
												renderItem={renderItem}
											/>
										</View>
									</View>
									:
									<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
										<Pressable
											style={style.readyButton}
											onPress={() => {
												setCountdown(14)
												prepareAnswers(questions[questionCount].correct_answer, questions[questionCount].incorrect_answers)
												lottieRef.current.play()
												setAnswerReady(true)
											}}>
											<Text style={style.readyText}>Ready</Text>
										</Pressable>
									</View>
						}
					</View>

			}
		</ImageBackground>
	)
}

export default QuestionPage;