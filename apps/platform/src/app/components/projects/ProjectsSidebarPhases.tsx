import { useTranslations } from 'next-intl';

import RoundPhase from '@/app/components/RoundPhase';
import { RoundData } from '@/app/types/round';

export default function ProjectsSidebarPhases({ round }: { round: RoundData }) {
	const t = useTranslations('round');

	return (
		<div className='mt-6'>
			<RoundPhase
				title={t('roundApplication')}
				startDate={new Date('2024-08-19T12:00:00')}
				endDate={new Date('2024-09-02T12:00:00')}
			/>
			<RoundPhase
				title={t('roundDonation')}
				startDate={new Date('2024-09-16T12:00:00')}
				endDate={new Date('2024-09-30T12:00:00')}
			/>
			<RoundPhase
				title={t('roundVotes')}
				startDate={new Date('2024-10-01T12:00:00')}
				endDate={new Date('2024-10-10T12:00:00')}
			/>
			<RoundPhase
				title={t('roundResults')}
				startDate={new Date('2024-10-15T12:00:00')}
				endDate={new Date('2024-30-11T12:00:00')}
			/>
		</div>
	);
}
