import { motion } from 'framer-motion'
import {
	AddCircleRounded,
	CheckCircleRounded,
	CancelRounded,
} from '@mui/icons-material'
import { Modal } from '@mui/material'
import { getGenre } from '../config/requests'

const dropIn = {
	hidden: {
		// y: '100vh',
		z: -999,
		y: '50vh',
		opacity: 0,
		scale: 0.5,
	},
	visible: {
		z: 999,
		opacity: 1,
		scale: 1,
		transition: {
			mass: 2,
			type: 'spring',
			damping: 60,
			stiffness: 500,
			duration: 4,
		},
	},
	exit: {
		// y: '50vh',
		z: -999,
		opacity: 0,
		scale: 0.5,
		transition: {
			duration: 2,
		},
	},
}

const ModalComponent = ({ modalOpen, movie, list, setList, handleClose }) => {
	return (
		<>
			<Modal
				open={modalOpen}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<motion.div
					onClick={(e) => e.stopPropagation()}
					variants={dropIn}
					initial='hidden'
					animate='visible'
					exit='exit'>
					<div className='modal'>
						<div
							className='modal__banner'
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie?.backdrop_path})`,
							}}>
							<CancelRounded
								className='modal__banner_icon'
								onClick={handleClose}
							/>
						</div>
						{/* modal banner */}
						<div className='modal__content'>
							<p className='modal__content_title'>
								{movie?.title}
							</p>
							{movie?.genre_ids && (
								<p className='modal__content_genres'>
									{getGenre(movie.genre_ids[0])}
									{movie.genre_ids[1] && (
										<>
											&bull;
											{getGenre(movie.genre_ids[1])}
										</>
									)}
									{movie.genre_ids[2] && (
										<>
											&bull;
											{getGenre(movie.genre_ids[2])}
										</>
									)}
									{list.find((id) => id === movie.id) ? (
										<>
											<CheckCircleRounded
												className='modal__content_icon'
												onClick={() =>
													setList((prev) =>
														prev.filter(
															(id) =>
																id !== movie.id
														)
													)
												}
											/>
										</>
									) : (
										<>
											<AddCircleRounded
												className='modal__content_icon'
												onClick={() =>
													setList((prev) => [
														...prev,
														movie.id,
													])
												}
											/>
										</>
									)}
								</p>
								// movie genres
							)}
							<p className='modal__content_overview'>
								{movie?.overview}
							</p>
						</div>
						{/* modal content */}
					</div>
					{/* modal */}
				</motion.div>
			</Modal>
		</>
	)
}

export default ModalComponent
